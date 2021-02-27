const  {Model, DataTypes}= require('sequelize');
const {static} = require('express');
const  bcrypt = require('bcryptjs');


class UserMotorista extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,  
            password:DataTypes.STRING,  
            whatsapp:DataTypes.STRING,
            cpf:DataTypes.STRING,  
            marca_carro:DataTypes.STRING,  
            placa:DataTypes.STRING,  






        },{
            sequelize
        });
        UserMotorista.addHook('beforeSave', async usermotorista =>{
            usermotorista.password =  await bcrypt.hash(usermotorista.password,10);
        });
        
    }
    
    pasValid(password){
        return bcrypt.compare(password,this.password);
    }
   

}
module.exports = UserMotorista;