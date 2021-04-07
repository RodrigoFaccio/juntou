'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('points', { 
      id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
       },
       name:{
        allowNull: false,
        type: Sequelize.STRING,
       },
       id_district: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    
      created_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('points');
     
  }
};
