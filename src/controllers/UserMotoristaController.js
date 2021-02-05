const UserMotorista  = require('../models/UserMotorista');



module.exports={
    async store(req,res){
          const {name,email,password,whatsapp,cpf,marca_carro,placa} = req.body;
            const userMotorista = await UserMotorista.findOne({where:{email}});
            if(userMotorista){
            
                return res.json('Usuário já cadastrado');
            }
          
         

          const user = await UserMotorista.create({name,email,password,whatsapp,cpf,marca_carro,placa});
          return res.json(user);

    },
    async index(req,res){
        const userslist = await UserMotorista.findAll();
        console.log(req.userId);

        return res.json(userslist);

  },
  
}
