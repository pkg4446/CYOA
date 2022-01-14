const Library   = require('../../models/image');

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
        IMAGE:   req.file.filename,
        SIZE:    req.file.size,
      });
      console.log("object");
    } catch (err) {
      console.log("파일이 없나봉가!");
      console.error(err);
      next(err);
    }
  },//Insert

}//module