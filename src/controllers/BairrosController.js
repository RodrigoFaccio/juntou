const Bairros  = require('../models/Bairros');
const {Op} =require('sequelize');




module.exports={
    async store(req,res){
          const {nome,cep} = req.body;

          
         

          const bairro = await Bairros.create({nome,cep});
          return res.json(bairro);

    },
    async list(req,res){
        const {nome,cep} = req.body;

        
       

        const bairros = await Bairros.findAll();
        return res.json(bairros);

  },
  async like(req,res){
    const {nome} = req.params;

    const bairrosNome = await Bairros.findAll({
        attributes:['nome'],
        where:{
            nome:{
                [Op.like]:'%'+nome+'%'
            }
        },
    });
    return res.json(bairrosNome);
},
    
  
}