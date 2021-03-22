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
      id_district: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_embark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_disembark: {
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
