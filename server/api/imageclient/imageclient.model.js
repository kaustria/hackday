'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImageClient', {
    _id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    imageId: DataTypes.INTEGER
  });
};
