'use strict';
module.exports = function (sequelize, DataTypes) {
  
  var board = sequelize.define('board', { // define('사용할 테이블명'.

    no: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: { type: DataTypes.STRING(20) }, 
    userName: { type: DataTypes.STRING(20) },
    title: { type: DataTypes.STRING },
    contents: { type: DataTypes.STRING(1000) },
    comments: { type: DataTypes.JSON },
    count: { type: DataTypes.INTEGER, defaultValue: 0 },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW } 
  }, {
    timestamps: false, 
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    tableName : 'board'
  });
  return board;
};