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

            TITLE:  {
                type: Sequelize.STRING(32),
                allowNull: false,
                defaultValue: "제목없음",
            },

            IMAGE:  {
                type: Sequelize.STRING(128),
                allowNull: true,
                defaultValue: "noImg.jpg",
            },

            TEXT:  {
                type: Sequelize.TEXT,
                allowNull: true,
            },

        },{
            sequelize,
            timestamps : false,
            underscored: false,
            modelName  : 'Cyoa',
            tableName  : 'cyoa',
            paranoid   : false,
            charset    : 'utf8',
            collate    : 'utf8_general_ci',
        });
    }
    static associate(db) {}
}