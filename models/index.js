const Sequelize  = require('sequelize');

const user       = require('./user');

const cyoa       = require('./cyoa');
const layer      = require('./layer');
const card       = require('./card');
const cardChoice = require('./cardChoice');
const image      = require('./image');

const env        = process.env.NODE_ENV || 'development';
const config     = require('../config/config.js')[env];
const db         = {};
const sequelize  = new Sequelize(config.database, config.username, config.password, config);

db.sequelize     = sequelize;
db.user          = user;
db.cyoa          = cyoa;
db.layer         = layer;
db.card          = card;
db.cardChoice    = cardChoice;
db.image         = image;

user.init(sequelize);
cyoa.init(sequelize);
layer.init(sequelize);
card.init(sequelize);
cardChoice.init(sequelize);
image.init(sequelize);

user.associate(db);
cyoa.associate(db);
layer.associate(db);
card.associate(db);
cardChoice.associate(db);
image.associate(db);

module.exports = db;
