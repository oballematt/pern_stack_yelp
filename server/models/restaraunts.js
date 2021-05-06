'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaraunts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaraunts.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price_range: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Restaraunts',
    tableName: 'restaraunts'
  });
  return Restaraunts;
};