const Embark  = require('../models/Embarque');
const District  = require('../models/Bairros');
const {Op} =require('sequelize');




module.exports={
    async store(req,res){
        const {id_district} = req.params;
          const {name,reference} = req.body;

          const district = await District.findByPk(id_district);
          if (!district) {
              return res.status(401).json({
                  error:['Bairro  não existe'],
              });
          } 
          

          const embark = await Embark.create({name,reference,id_district});
          return res.json(embark);

          
         

         

    },
    async list(req,res){
        const {id_district} = req.params;
        const district = await District.findByPk(id_district);

        if (!district) {
            return res.status(401).json({
                error:['district não existe'],
            });
        } 
        const EmbarkDistrict = await  Embark.findAll({where:{id_district}})
        return res.json(EmbarkDistrict);

    },
    async like(req,res){
        const {name} = req.params;

        const localName = await Embark.findAll({
            attributes:['name'],
            where:{
                name:{
                    [Op.like]:'%'+name+'%'
                }
            },
        });
        return res.json(localName);
  },
    
  
}