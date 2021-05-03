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
        const { id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,id_user } = req.params;
       const  name="teste";
       const people = 1;
       const NameUser = await Passenger.findOne({where:{id:id_user}})
        

  
        const Trips = await Trip.create({people,name,id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,time});
         await PassengerTrip.create({
            id_user,
            name:NameUser.name,
            id_trip:Trips.id,
            time
            
        });
        return res.json(Trips);
    },

    async listAll(req, res) {
        const usersList = await Trip.findAll();
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
  async ListHoursExist(req,res){
    const {id_district_disembark,id_district_embark} = req.params;

    const HoursExist = await Trip.findAll({where:{id_district_disembark,id_district_embark}});

    res.json(HoursExist);

  },
  async createTripExist(req,res){
      const {id_trip,id_user}=req.params;
      const verifyTripExist = await Trip.findByPk(id_trip);
      const NameUser = await Passenger.findOne({where:{id:id_user}})
      console.log(NameUser);

      

      if(verifyTripExist){
          if(verifyTripExist.people<4){
              const passengerTrip = await PassengerTrip.findAll({where:{id_user:id_user}});

            // if(passengerTrip)
            //      return res.json('Você já esta cadastrado na viagem');


            const peopleNumber  = verifyTripExist.people +1;

            const tripAddPeople = await Trip.update({ people:peopleNumber  }, { where: { id: id_trip} });
            const addPeopleTrip = await PassengerTrip.create({
                id_user,
                name:NameUser.name,
                id_trip,
                time:verifyTripExist.time
                
            });


            res.json(tripAddPeople);
          }else{
          res.json('Viagem já esta cheia');

          }


      }else{
          res.json('Viagem nao existe');
      }

      



    
  }

}
