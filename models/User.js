const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define columns and configuration
User.init(
  {
    id: {
      // use sequelize DataTypes object to define type
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // if allowNull is false data can be validated
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // pw must be 4 characters
        len: [4]
      }
    }
  },
  {
    // table config options

    // pass in imported sequelize connection
    sequelize,
    // don't create createdAt/updatedAt timestamp fields
    timestampes: false,
    // don't pluralize table name
    freezeTableName: true,
    // use underscore instead of camel case
    underscored: true,
    // modelname stays lowercase
    modelName: 'user'
  }
);

module.exports = User;