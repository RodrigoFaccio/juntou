const Bairros  = require('../models/Bairros');
const {Op} =require('sequelize');




module.exports={
    async store(req,res){
          const {name,cep} = req.body;

           
         

          const bairro = await Bairros.create({name,cep});
          return res.json(bairro);

    },
    async list(req,res){
        const {name,cep} = req.body;

        
       

        const bairros = await Bairros.findAll();
        return res.json(bairros);

  },
  async like(req,res){
    const {name} = req.params;

    const bairrosNome = await Bairros.findAll({
        attributes:['name'],
        where:{
            name:{
                [Op.like]:'%'+name+'%'
            }
        },
    });
    return res.json(bairrosNome);
},
    
  
}