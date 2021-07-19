'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
       
      id_user:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_district_embark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_point_embark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_district_disembark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
       id_point_disembark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      people: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      time: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },


    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('trips');

  }
};
