'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('districts', { 
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
       cep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dominante: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    
      await queryInterface.dropTable('districts');
     
  }
};
