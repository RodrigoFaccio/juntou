const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Desembarque extends Model{
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            cep:DataTypes.STRING,
            id_embarque:DataTypes.INTEGER,
            referencia:DataTypes.STRING,  
           
            
            



        },{
            sequelize
        });
        
        
    }
   
  
   

}
module.exports = Desembarque;