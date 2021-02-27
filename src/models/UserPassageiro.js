
const { Model, DataTypes } = require('sequelize');
const  bcrypt = require('bcryptjs');


class UserPassageiro extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,  
            password:DataTypes.STRING,  
            whatsapp:DataTypes.STRING,  



        },{
            sequelize
        });
        UserPassageiro.addHook('beforeSave', async userpassageiro =>{
            userpassageiro.password =  await bcrypt.hash(userpassageiro.password,10);
        });
        
    }
    
    pasValid(password){
        return bcrypt.compare(password,this.password);
    }
   

}
module.exports = UserPassageiro;