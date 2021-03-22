'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    
      await queryInterface.createTable('embarks', { 
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
        id_district: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references:{model:'districts', key:'id'},
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
    
      await queryInterface.dropTable('embarks');
    
  }
};
