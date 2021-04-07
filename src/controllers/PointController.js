const Point = require('../models/Point');
const District = require('../models/Bairros');
const { like } = require('./ViagensController');
const {Op} =require('sequelize');




module.exports = {
    async store(req, res) {
       const {id_district} = req.params;
       const {name,cep}=req.body;
       
       
       

       const district = await District.findByPk(id_district);

       if(!district){
            return res.status(401).json('Bairro não existe');
       }
       const pointsName = await Point.findAll({where:{name:name}});
       console.log(pointsName);

        if(pointsName!=''){
            return res.status(401).json('Esse ponto ja existe ');
        }

       const point = await Point.create({name,cep,id_district});
       return res.json(point);
       

       




    },
    async list(req,res){
        const {id_district} = req.params;
        const points = await Point.findAll({where:{id_district}});
        res.json(points);
    },


    async like(req,res){
        const {id_district} = req.params;
        
        const dominante = await District.findOne({where:{id:id_district,dominante:1}});

        if(dominante){
            const districtDominante = await District.findAll({where:{dominante:0}});
            return res.json(districtDominante);
        }else{
            const districtDominante = await District.findAll({where:{dominante:1}});
            return res.json(districtDominante);
        }

    },
    
   

}
