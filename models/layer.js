const Sequelize = require('sequelize');

module.exports = class Wasp extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            NO: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },

            CYOA:  {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },

            LAYER:  {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },

            LAYER_LIMIT:  {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },

            IMAGE:  {
                type: Sequelize.STRING(128),
                allowNull: true,
                defaultValue: "noImg.jpg",
            },

            TITLE:  {
                type: Sequelize.STRING(32),
                allowNull: false,
            },

            TEXT:  {
                type: Sequelize.TEXT,
                allowNull: true,
            },

        },{
            sequelize,
            timestamps : false,
            underscored: false,
            modelName  : 'Layer',
            tableName  : 'layer',
            paranoid   : false,
            charset    : 'utf8',
            collate    : 'utf8_general_ci',
        });
    }
    static associate(db) {}
}