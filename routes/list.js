const express = require('express');
const list    = require('../controller/web/list');
const view    = require('../controller/json/view');
const { isLoggedIn, isNotLoggedIn } = require('./userMiddlewares');

const router  = express.Router();

router.get('/cyoa/:no', async (req, res, next) => {
  res.render('read/view');
});

router.get('/view/:no', async (req, res, next) => {
  view.view(req, res, next);
});

router.get('/', async (req, res, next) => {
  list.ListAll(req, res, next);
});

router.get('/witer', isLoggedIn, async (req, res, next) => {
  list.ListUser(req, res, next);
});

router.get('/title/:no', async (req, res, next) => {
  list.ListTitle(req, res, next);
});


module.exports = router;