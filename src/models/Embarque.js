const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Embarque extends Model{
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            referencia:DataTypes.STRING,  
            
            id_bairro:DataTypes.INTEGER,
            
            



        },{
            sequelize
        });
        
        
    }
   
  
   

}
module.exports = Embarque;