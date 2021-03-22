'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return  queryInterface.addColumn(
      'trip_people',
      'name_embark',{
        type:Sequelize.STRING,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.removeColumn(
      'trip_people',
      'name_embark',{
        type:Sequelize.STRING,
      },
    );
  },
  
};
