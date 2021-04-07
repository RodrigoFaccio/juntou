const Bairros  = require('../models/Bairros');
const {Op} =require('sequelize');




module.exports={
    async store(req,res){
          const {name,cep,dominante} = req.body;

           
         

          const bairro = await Bairros.create({name,cep,dominante});
          return res.json(bairro);

    },
    async list(req,res){
        const {name,cep} = req.body;

        
       

        const bairros = await Bairros.findAll();
        return res.json(bairros);

  },
  async like(req,res){
        const {name} = req.params;

        const localName = await Bairros.findAll({
            
            where:{
                name:{
                    [Op.iLike]:'%'+name+'%'
                }
            },
        });
        return res.json(localName);
  },
  async dominante(req,res){
    const {name} = req.params;

    const localName = await Bairros.findAll({
        
        where:{
            dominante:1,
            name:{
                [Op.iLike]:'%'+name+'%'
            }
        },
    });
    return res.json(localName);
},
async noDominante(req,res){
    const {name} = req.params;

    const localName = await Bairros.findAll({
        
        where:{
            dominante:0,
            name:{
                [Op.iLike]:'%'+name+'%'
            }
        },
    });
    return res.json(localName);
},
    
  
}