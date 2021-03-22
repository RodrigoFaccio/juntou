module.exports = {
    up: async (queryInterface, Sequelize) => {
     return  queryInterface.addColumn(
        'trip_people',
        'checked',{
          type:Sequelize.STRING,
        },
      );
    },
  
    down: async (queryInterface, Sequelize) => {
      return  queryInterface.removeColumn(
        'trip_people',
        'checked'
      );
    },
    
  };
  