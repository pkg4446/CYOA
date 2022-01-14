const cyoa       = require('../../models/cyoa');
const layer      = require('../../models/layer');
const card       = require('../../models/card');
const choice     = require('../../models/cardChoice');

module.exports   = {
  view : async function(req, res, next){
    try {
      const CYOA = await cyoa.findOne({
        where: {NO: req.params.no},
        raw : true,
      });

      const Layer = await layer.findAll({
        where: {CYOA: req.params.no},
        order: [['NO', 'ASC']],
        raw : true,
      });

      const Card = await card.findAll({
        where: {CYOA: req.params.no},
        order: [['NO', 'ASC']],
        raw : true,
      });

      const Choice = await choice.findAll({
        where: {CYOA: req.params.no},
        order: [['NO', 'ASC']],
        raw : true,
      });
      
      const retrunOB = {CYOA,Layer,Card,Choice}
      return res.json(retrunOB);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },//view
}//module