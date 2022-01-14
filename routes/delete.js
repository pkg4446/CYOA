const express = require('express');
const cyoa    = require('../controller/json/cyoa');
const layer   = require('../controller/json/layer');
const card    = require('../controller/json/card');
const choice  = require('../controller/json/cardChoice');

const router  = express.Router();

router.post('/cyoa/:no', async (req, res, next) => {
  cyoa.Delete(req, res, next);
});

router.post('/layer/:no', async (req, res, next) => {
  layer.Delete(req, res, next);
});

router.post('/card/:no', async (req, res, next) => {
  card.Delete(req, res, next);
});

router.post('/choice/:no', async (req, res, next) => {
  choice.Delete(req, res, next);
});

module.exports = router;