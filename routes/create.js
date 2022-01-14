const express = require('express');
const cyoa    = require('../controller/json/cyoa');
const layer   = require('../controller/json/layer');
const card    = require('../controller/json/card');
const choice  = require('../controller/json/cardChoice');
const image  = require('../controller/json/image');
const multer  = require('./mutler');
const { isLoggedIn, isNotLoggedIn } = require('./userMiddlewares');

const router  = express.Router();

router.get('/', isLoggedIn, function(req, res, next) {
  res.render('create/cyoa');
  });

router.get('/view/:no', isLoggedIn, function(req, res, next) {
  res.render('create/look');
  });

router.get('/layer/:cyoa/:layer', isLoggedIn, function(req, res, next) {
  res.render('create/layer');
});

router.get('/card/:cyoa/:layer/', isLoggedIn, function(req, res, next) {
  res.render('create/card');
});

router.get('/option/:cyoa/:card/', isLoggedIn, function(req, res, next) {
  res.render('create/option');
});

router.post('/cyoa', multer.upload.single('img'), (req, res, next) => {
  Pretreatment(req, res, next);
  cyoa.Insert(req, res, next);
});

router.post('/layer', multer.upload.single('img'), (req, res, next) => {
  console.log(req.body);
  Pretreatment(req, res, next);
  layer.Insert(req, res, next);
});

router.post('/card', multer.upload.single('img'), (req, res, next) => {
  Pretreatment(req, res, next);
  card.Insert(req, res, next);
});

router.post('/choice', async (req, res, next) => {
  console.log(req.body);
  choice.Insert(req, res, next);
});

function Pretreatment(req, res, next){
  if(req.file === undefined){
    console.log("파일없음");
    req.body.filename = "noImg.jpg"
  }else{
    req.body.filename = req.file.filename;
    image.Insert(req, res, next);;
  }
};

module.exports = router;