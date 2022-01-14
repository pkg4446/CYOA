const passport  = require('passport');
const local     = require('./localStrategy');
const User      = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.USER_ID);
  });

  passport.deserializeUser((USER_ID, done) => {
    User.findOne({ where: { USER_ID } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};
