const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./userMiddlewares');
const User = require('../models/user');

const router = express.Router();

router.get('/login', isNotLoggedIn, function(req, res, next) {
  res.render('user/login');
  });

router.get('/join', isNotLoggedIn, function(req, res, next) {
  res.render('user/register');
  });

router.get('/info', isLoggedIn, async (req, res, next) => {
  try {
    // 로그인 인증이 되었다면, req.user에서 유저 정보 확인 가능
    if (req.user) {
      // 로그인 인증된 유저의 id 가져오기
      const user = await User.findOne({
        where: { USER_ID: req.user.USER_ID }
      });
      // 그 유저의 정보 중 비밀번호를 제외한 정보 가져오기
      const UserInfo = await User.findOne({
        where: { USER_ID: user.USER_ID },
        attributes: {
          exclude: ['USER_PASS'], // exclude: 제외한 나머지 정보 가져오기
        },
      });
      res.status(200).json(UserInfo);
    } else {
      res.status(200).json(null);
    }
  } catch(error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
