const express = require('express');
const image    = require('../controller/web/image');

const router  = express.Router();

router.get('/', async (req, res, next) => {
  image.ListAll(req, res, next);
});

router.get('/:no', async (req, res, next) => {
  image.ListTitle(req, res, next);
});

module.exports = router;