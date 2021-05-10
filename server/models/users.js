'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return {...this.get(), id: undefined, user_password: undefined, user_id: undefined}
    }
  };
  Users.init({
    user_id:{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_name:{ 
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    user_email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      notEmpty: true
    },
    user_password:{ 
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      set(value) {
        const hash = bcrypt.hashSync(value, 10);
        this.setDataValue('user_password', hash);
      },
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Users',
    tableName: 'users',
  });
  return Users;
};