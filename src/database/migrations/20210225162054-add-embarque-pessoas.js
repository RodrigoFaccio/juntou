'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return  queryInterface.addColumn(
      'viagens_pessoas',
      'nome_embarque',{
        type:Sequelize.STRING,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.removeColumn(
      'viagens_pessoas',
      'nome_embarque',{
        type:Sequelize.STRING,
      },
    );
  },
  
};
