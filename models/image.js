const Sequelize = require('sequelize');

module.exports = class Wasp extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            NO: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },

            IMAGE:  {
                type: Sequelize.STRING(128),
                allowNull: true,
                defaultValue: "noImg.jpg",
            },

            SIZE:  {
                type: Sequelize.STRING(128),
                allowNull: true,
            },

        },{
            sequelize,
            timestamps : false,
            underscored: false,
            modelName  : 'Image',
            tableName  : 'image',
            paranoid   : false,
            charset    : 'utf8',
            collate    : 'utf8_general_ci',
        });
    }
    static associate(db) {}
}