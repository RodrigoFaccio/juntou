const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class District extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            cep:DataTypes.STRING,  
            dominante:DataTypes.INTEGER,

            



        },{
            sequelize
        });
        
        
    }
    
  
   

}
module.exports = District;