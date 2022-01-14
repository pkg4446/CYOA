const express = require('express');;


const Create    = require('./create');
const Read      = require('./read');
const Update    = require('./update');
const Delete    = require('./delete');

const List      = require('./list');
const Image     = require('./image');

const User      = require('./user');
const UserAuth  = require('./userAuth');


const router = express.Router();

router.use('/',List);
router.use('/image',Image);

router.use('/create',Create);
router.use('/read',Read);
router.use('/update',Update);
router.use('/delete',Delete);

router.use('/user',User);
router.use('/auth',UserAuth);

module.exports = router;