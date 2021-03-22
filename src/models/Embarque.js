const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Embark extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            reference:DataTypes.STRING,  
            
            id_district:DataTypes.INTEGER,
            
            



        },{
            sequelize
        });
        
        
    }
   
  
   

}
module.exports = Embark;