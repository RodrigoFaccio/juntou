'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disembarks', { 
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
       reference: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_embark: {
        allowNull: false,
        type: Sequelize.INTEGER,
        
  
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
    
      await queryInterface.dropTable('disembarks');
     
  }
};
