const express = require('express');
const cyoa    = require('../controller/json/cyoa');
const layer   = require('../controller/json/layer');
const card    = require('../controller/json/card');
const choice  = require('../controller/json/cardChoice');

const router  = express.Router();

router.get('/cyoa/:no', async (req, res, next) => {
  cyoa.List(req, res, next);
});

router.get('/layer/:no', async (req, res, next) => {
  layer.List(req, res, next);
});

router.get('/card/:no', async (req, res, next) => {
  card.List(req, res, next);
});

router.get('/card/:no', async (req, res, next) => {
  choice.List(req, res, next);
});


module.exports = router;