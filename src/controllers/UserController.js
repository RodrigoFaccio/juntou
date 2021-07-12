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
    async teste(req,res){
        res.json('ola')
    },
    async index(req,res){
        const userslist = await User.findAll();
        console.log(req.userId);

        return res.json(userslist);

  },
  async datails(req,res){
      const {id} = req.params;
        const userDetails = await User.findByPk(id)

        return res.json(userDetails);
  },
  async alteracao(req,res){
      const {id} = req.params;
      const {name,email,whatsapp} = req.body;
      const alterUser = await User.update({ name,email,whatsapp }, { where: { id } });

      return res.json(alterUser);

  }
  
  
}