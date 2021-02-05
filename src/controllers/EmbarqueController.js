const Embarque  = require('../models/Embarque');
const Bairro  = require('../models/Bairros');
const {Op} =require('sequelize');




module.exports={
    async store(req,res){
        const {id_bairro} = req.params;
          const {nome,referencia} = req.body;

          const bairro = await Bairro.findByPk(id_bairro);
          if (!bairro) {
              return res.status(401).json({
                  error:['Bairro não existe'],
              });
          } 
          

          const embarque = await Embarque.create({nome,referencia,id_bairro});
          return res.json(embarque);

          
         

         

    },
    async list(req,res){
        const {id_bairro} = req.params;
        const bairro = await Bairro.findByPk(id_bairro);
        const bairros = await Bairro.findAll();

        if (!bairro) {
            return res.status(401).json({
                error:['Bairro não existe'],
            });
        } 
        const embarquesbairro = await  Embarque.findAll({where:{id_bairro}})
        return res.json(embarquesbairro);

    },
    async like(req,res){
        const {name} = req.params;

        const locaisname = await Embarque.findAll({
            attributes:['nome'],
            where:{
                nome:{
                    [Op.like]:'%'+name+'%'
                }
            },
        });
        return res.json(locaisname);
  },
    
  
}