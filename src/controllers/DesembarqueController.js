const Embark  = require('../models/Embarque');
const Disembark  = require('../models/Desembarque');





module.exports={
    async store(req,res){
        const {id_embark} = req.params;
          const {name,reference,cep} = req.body;

          const district = await Embark.findByPk(id_embark);
          if (!district) {
              return res.status(401).json({
                  error:['Embarque não existe'],
              });
          } 
          

          const embark = await Disembark.create({name,reference,id_embark,cep});
          return res.json(embark);

          
         

         

    },
   
    
  
}