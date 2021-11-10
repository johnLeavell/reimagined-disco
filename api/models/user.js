"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email already in use!",
        },

      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,

      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
