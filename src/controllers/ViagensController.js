const Trip = require('../models/Viagens');
const PassengerTrip = require('../models/PassageirosViagens');
const Passenger = require('../models/UserPassageiro');
const District = require('../models/Bairros');

const {Op} =require('sequelize');
const { json } = require('body-parser');






module.exports = {
    async createTrip(req, res) {
        const {
           time
        } = req.body;
        const { id_district_embark,id_point_embark,id_district_disembark,id_point_disembark } = req.params;
        const name = 'teste';
        const people =1;

        const TripExiste = await Trip.findOne({where:{
            name,
            id_district_embark,
            id_point_embark,
            id_district_disembark,
            id_point_disembark,
            time,
            people:{
                [Op.lt]:4
            }
        }});
            

    if(TripExiste){
        //adicionar pessoas a viagem 
        const peopleActual = TripExiste.people +1;
       const trip = await Trip.update({ people:peopleActual  }, { where: { id: TripExiste.id } });
        return res.json(trip);
    }else{
        const Trips = await Trip.create({people,name,id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,time})
        return res.json(Trips);
    }

        
           
        


    },

    async listAll(req, res) {
        const usersList = await Trip.findAll({where:{situation:"0"}}) ;
        console.log(req.userId);

        return res.json(usersList);

    },
    async available(req,res){
        const available = await Trip.findAll({where:{ 
            people:{
            [Op.lt]: 4,
        }}});

        return res.json(available);
    },
    async finalization(req,res){
        const {id_trip} = req.params;
        const newSituation = "1";
        const trip = await Trip.update({ situation:newSituation }, { where: { id: id_trip } });
if(trip){
    return res.json({message:'Finalizada com sucesso'})

}
    },

    async like(req,res){
        const {name} = req.params;

        const localName = await Trip.findAll({
            attributes:['name'],
            where:{
                name:{
                    [Op.iLike]:'%'+name+'%'
                }
            },
        });
        return res.json(localName);
  },

}
