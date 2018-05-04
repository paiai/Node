'use strict';
module.exports = function (sequelize, DataTypes) {
  
  var users = sequelize.define('users', { // define('사용할 테이블명'.

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: { type: DataTypes.STRING(20) }, 
    userPass: { type: DataTypes.STRING(20) }, 
    userName: { type: DataTypes.STRING(20) },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW } 
  }, {
    timestamps: false, 
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    tableName : 'users'
  });
  return users;
};