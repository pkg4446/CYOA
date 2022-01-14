const Sequelize = require('sequelize');

module.exports = class Wasp extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            NO: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },

            USER_ID: {
                type: Sequelize.STRING(32),
                allowNull: false,
            },

            CYOA:  {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },

            CARD:  {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },

            TITLE:  {
                type: Sequelize.STRING(32),
                allowNull: true,
            },

            TEXT:  {
                type: Sequelize.TEXT,
                allowNull: false,
            },

            POINT:  {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps : false,
            underscored: false,
            modelName  : 'CardChoice',
            tableName  : 'cardChoice',
            paranoid   : false,
            charset    : 'utf8',
            collate    : 'utf8_general_ci',
        });
    }
    static associate(db) {}
}