const Library   = require('../../models/cyoa');
const { Op }    = require("sequelize");

module.exports = {
  
  ListAll : async function(req, res, next){
    try {
      const object = await Library.findAll({
        attributes: {exclude: ['IMAGE','TEXT']},
        order: [['NO', 'DESC']],
        raw : true,
      });
      console.log("CYOA List All");
      return res.render('read/list',{list:object});
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//ListAll

  ListUser : async function(req, res, next){
    try {
      const object = await Library.findAll({
        where: {USER_ID: req.user.USER_ID},
        attributes: {exclude: ['IMAGE','TEXT']},
        order: [['NO', 'DESC']],
        raw : true,
      });
      console.log("CYOA List write by " + req.user.USER_ID);
      res.render('read/list',{list:object});
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//List

  ListTitle : async function(req, res, next){
    try {
      const object = await Library.findAll({
        where: {TITLE: 
          {[Op.like]: "%" + req.params.no + "%"}
        },
        attributes: {exclude: ['IMAGE','TEXT']},
        order: [['NO', 'DESC']],
        raw : true,
      });
      console.log("CYOA List by word : " + req.params.no);
      res.render('read/list',{list:object});
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//List
  
}//module