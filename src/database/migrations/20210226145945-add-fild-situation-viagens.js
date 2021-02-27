module.exports = {
    up: async (queryInterface, Sequelize) => {
     return  queryInterface.addColumn(
        'viagens',
        'situation',{
          type:Sequelize.STRING,
        },
      );
    },
  
    down: async (queryInterface, Sequelize) => {
      return  queryInterface.removeColumn(
        'viagens',
        'situation'
      );
    },
    
  };
  