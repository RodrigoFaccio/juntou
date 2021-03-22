const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Disembark extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            cep:DataTypes.STRING,
            id_embark:DataTypes.INTEGER,
            reference:DataTypes.STRING,  
           
            
            



        },{
            sequelize
        });
        
        
    }
   
  
   

}
module.exports = Disembark;