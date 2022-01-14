const Library   = require('../../models/image');
const { Op }    = require("sequelize");

module.exports = {
  
  ListAll : async function(req, res, next){
    try {
      const object = await Library.findAll({
        order: [['NO', 'DESC']],
        raw : true,
      });
      console.log("Image List");
      return res.render('read/image',{image:object});
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//ListAll

  ListTitle : async function(req, res, next){
    try {
      const object = await Library.findAll({
        where: {IMAGE: 
          {[Op.like]: "%" + req.params.no + "%"}
        },
        order: [['NO', 'DESC']],
        raw : true,
      });
      console.log("Image List by word : " + req.params.no);
      res.render('read/image',{image:object});
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//List
  
}//module