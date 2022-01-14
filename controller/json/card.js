const Library   = require('../../models/card');

module.exports = {

  List : async function(req, res, next){
    try {
      const object = await Library.findOne({
        where: {NO: req.params.no},
        raw : true,
      });
      console.log("Card View : " + req.params.no, object);
      return res.json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },//List

  Insert  : async function(req, res, next){
    try {
      const object = await Library.create({
        USER_ID:    req.user.USER_ID,
        CYOA:       parseInt(req.body.cyoa),
        LAYER:      parseInt(req.body.layer),
        CARD_LIMIT: parseInt(req.body.limit),
        IMAGE:      req.body.filename,
        TITLE:      req.body.title,
        TEXT:       req.body.contents,
        POINT:           parseInt(req.body.point),
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
        CARD_LIMIT: req.body.limit,
        IMAGE:      req.body.filename,
        TITLE:      req.body.title,
        TEXT:       req.body.contents,
        POINT:           parseInt(req.body.point),
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