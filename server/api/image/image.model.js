'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Image', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    widthInPixels: DataTypes.INTEGER,
    heightInPixels: DataTypes.INTEGER,
    path: DataTypes.STRING,
    pixelsPerInchX: DataTypes.INTEGER,
    pixelsPerInchY: DataTypes.INTEGER
  });
};
