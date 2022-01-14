const express = require('express');
const cyoa    = require('../controller/json/cyoa');
const layer   = require('../controller/json/layer');
const card    = require('../controller/json/card');
const choice  = require('../controller/json/cardChoice');
const multer  = require('./mutler');
const { isLoggedIn, isNotLoggedIn } = require('./userMiddlewares');

const router  = express.Router();

router.post('/cyoa/:no', isLoggedIn, multer.upload.single('img'), (req, res, next) => {
  Pretreatment(req, res, next);
  cyoa.Update(req, res, next);
});

router.post('/layer/:no', isLoggedIn, multer.upload.single('img'), (req, res, next) => {
  Pretreatment(req, res, next);
  layer.Update(req, res, next);
});

router.post('/card/:no', isLoggedIn, multer.upload.single('img'), (req, res, next) => {
  Pretreatment(req, res, next);
  card.Update(req, res, next);
});

function Pretreatment(req, res, next){
  if(req.file === undefined){
    console.log("파일없음");
  }else{
    req.body.filename = req.file.filename;
    image.Insert(req, res, next);;
  }
};

router.post('/choice/:no', isLoggedIn, async (req, res, next) => {
  choice.Update(req, res, next);
});

module.exports = router;