const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Point extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            cep:DataTypes.STRING,  
            id_district:DataTypes.INTEGER,

            



        },{
            sequelize
        });
        
        
    }
    
  
   

}
module.exports = Point;