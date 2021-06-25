'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return  queryInterface.addColumn(
      'trips',
      'id_user',{
        type:Sequelize.INTEGER,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.removeColumn(
      'trips',
      'id_user',{
        type:Sequelize.INTEGER,
      },
    );
  },
  
};
