const User  = require('../models/UserPassageiro');



module.exports={
    async store(req,res){
          const {name,email,password,whatsapp} = req.body;
            const usuario = await User.findOne({where:{email}});
            
            if(usuario){
                  return res.status(401).json('Usuário já cadastrado');
            }
          
         

          const user = await User.create({name,email,password,whatsapp});
          return res.json(user);

    },
    async index(req,res){
        const userslist = await User.findAll();
        console.log(req.userId);

        return res.json(userslist);

  },
  
  
}