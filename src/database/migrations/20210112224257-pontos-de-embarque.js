'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    
      await queryInterface.createTable('embarques', { 
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
        id_bairro: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references:{model:'bairros', key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',

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
    
      await queryInterface.dropTable('embarques');
    
  }
};
