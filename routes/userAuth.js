const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./userMiddlewares');
const User = require('../models/user');

const router = express.Router();


router.post('/idCheck', isNotLoggedIn, async (req, res, next) => {
  const { USER_ID} = req.body;
  try {
    const exUser = await User.findOne({ where: { USER_ID } });
    if (exUser) {
      let idcheck = {
        userCheck:  "notAble",
                    };
      return res.json(idcheck);
    }
    let idcheck = {
        userCheck:  "able",
                  };
    return res.json(idcheck);
  } catch (error) {
    console.error(error);
    let idcheck = {
      userCheck:  "fail",
                  };
    return res.json(idcheck);
  }
});

router.post('/join', async (req, res, next) => {
  const {USER_ID, USER_NAME, USER_PASS, USER_EMAIL} = req.body;
  console.log(USER_ID, USER_NAME, USER_PASS, USER_EMAIL);
  try {
    const exUser = await User.findOne({ where: { USER_ID } });
    if (exUser) {
      let idcheck = {
        userCheck:  "notAble",
                    };
      return res.json(idcheck);
    }
    const hash = await bcrypt.hash(USER_PASS, 12);
    console.log(hash);
    await User.create({
      USER_ID:          USER_ID,
      USER_NAME:        USER_NAME,
      USER_PASS:        hash,
      USER_EMAIL:       USER_EMAIL,
    });
    let joinOk = {
      loginState:  "sucess",
                  };
    return res.json(joinOk);
  } catch (error) {
    console.error(error);
    let joinFail = {
      loginState:  "fail",
                  };
    return res.json(joinFail);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.send('noData');
    }
    return req.login(user, (loginError) => {

      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      
      return res.json(user.USER_ID);
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
