'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
      await queryInterface.createTable('user_passageiros', { 
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
         email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        whatsapp: {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
