'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('viagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_bairro: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_embarque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_desembarque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pessoas: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      horario: {
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

    await queryInterface.dropTable('viagens');

  }
};
