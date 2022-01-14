const Library   = require('../../models/cyoa');

module.exports = {
  
  List : async function(req, res, next){
    try {
      const object = await Library.findOne({
        where: {NO: req.params.no},
        raw : true,
      });
      console.log("CYOA : " + req.params.no, object);
      return res.json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//List

  Insert  : async function(req, res, next){
    try {
      const object = await Library.create({
        USER_ID: req.user.USER_ID,
        TITLE:   req.body.title,
        IMAGE:   req.body.filename,
        TEXT:    req.body.contents,
      });
      console.log(object);
      return res.status(201).json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//Insert

  Update  : async function(req, res, next){
    try {
      const object = await Library.update({
        TITLE:   req.body.title,
        IMAGE:   req.body.filename,
        TEXT:    req.body.contents,
      },
      {
        where: {NO: req.params.no, USER_ID: req.user.USER_ID}
      });
      console.log(object);
      return res.status(201).json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//Update

  Delete  : async function(req, res, next){
    try{
      const result = await Library.destroy({
        where: {NO: req.params.no, USER_ID: req.user.USER_ID}
      });
      return res.json(result);
    }
    catch(err){
      console.error(err); 
      next(err);
    }
  },//Delete
  
}//module