'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('desembarques', { 
      id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
       },
       nome:{
        allowNull: false,
        type: Sequelize.STRING,
       },
       referencia: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_embarque: {
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
    
      await queryInterface.dropTable('desembarques');
     
  }
};
