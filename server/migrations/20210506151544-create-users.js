'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id:{ 
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_name:{ 
        type: DataTypes.STRING,
        allowNull: false
      },
      user_email:{ 
        type: DataTypes.STRING,
        allowNull: false
      },
      user_password:{ 
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  }
};