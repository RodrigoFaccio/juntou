const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class Bairros extends Model{
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            cep:DataTypes.STRING,  
            



        },{
            sequelize
        });
        
        
    }
    
  
   

}
module.exports = Bairros;