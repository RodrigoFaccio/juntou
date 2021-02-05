const Embarque  = require('../models/Embarque');
const Bairro  = require('../models/Bairros');
const Desembarque  = require('../models/Desembarque');

const {Op} =require('sequelize');




module.exports={
    async store(req,res){
        const {id_embarque} = req.params;
          const {nome,referencia,cep} = req.body;

          const bairro = await Embarque.findByPk(id_embarque);
          if (!bairro) {
              return res.status(401).json({
                  error:['Embarque não existe'],
              });
          } 
          

          const embarque = await Desembarque.create({nome,referencia,id_embarque,cep});
          return res.json(embarque);

          
         

         

    },
   
    
  
}