const Trip = require('../models/Viagens');
const PassengerTrip = require('../models/PassageirosViagens');
const Passenger = require('../models/UserPassageiro');
const District = require('../models/Bairros');
const Point = require('../models/Point');

const {Op} =require('sequelize');
const { json } = require('body-parser');
const { info } = require('./BairrosController');






module.exports = {
    async createTrip(req, res) {
        const {
           time
        } = req.body;
        const { id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,id_user } = req.params;
       const people = 1;
       const NameUser = await Passenger.findOne({where:{id:id_user}});
       const DistrictEmbark = await District.findByPk(id_district_embark);
       const DistrictDisebark = await District.findByPk(id_district_disembark);
       const name = DistrictEmbark.name+"-"+DistrictDisebark.name;




       const checkViagemExist = await Trip.findOne({where:{id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,time}});
       console.log(checkViagemExist)
        if(checkViagemExist)
            return res.json('Viagem já existe');

  
        const Trips = await Trip.create({people,name,id_district_embark,id_point_embark,id_district_disembark,id_point_disembark,time,status:"0",id_user});
         await PassengerTrip.create({
            id_user,
            name:NameUser.name,
            id_trip:Trips.id,
            time
            
        });
        return res.json(Trips);
    },

    async listAll(req, res) {
        const usersList = await Trip.findAll({
            where:{
                people:{
                    [Op.gt]:2
                },
                status:'0'
            }
        });
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
        const {id_trip,id_user} = req.params;
        const newSituation = "1";
        const trip = await Trip.update({ status:newSituation,id_user }, { where: { id: id_trip } });
if(trip){
    return res.json({message:'Finalizada com sucesso'})

}else{
    return res.json({menssage:"Erro"})
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

            await Trip.update({ people:peopleNumber  }, { where: { id: id_trip} });
            const dateTripCreate = await PassengerTrip.create({
                id_user,
                name:NameUser.name,
                id_trip,
                time:verifyTripExist.time
                
            });


            res.json(dateTripCreate);
          }else{
          res.json('Viagem já esta cheia');

          }


      }else{
          res.json('Viagem nao existe');
      }

      



    
  },

  // pegar passageiros pelo id da viagem 
    async  listPassengerId(req,res){
        const  {id_trip} =   req.params;

        const passengers = await PassengerTrip.findAll({
            where:{
                id_trip,
               
            },

        
        });

        res.json(passengers);
    },

    // listar informações sobre a viagem 
    async  listInfosTripEmbark(req,res){
        const  {id} =   req.params;

        const tripInfos = await Trip.findOne({where:{id}});
        const infopointEmbark = await Point.findAll({where:{id:tripInfos.id_point_embark}});
        const infoDistrictDisembark = await District.findAll({where:{id:tripInfos.id_district_embark}});
        const namesPoints = infoDistrictDisembark[0].name +' - '+infopointEmbark[0].name;

        res.json(namesPoints);
    },
    async  listInfosTripDisembark(req,res){
        const  {id} =   req.params;

        const tripInfos = await Trip.findOne({where:{id}});
        const infopointDisembark = await Point.findAll({where:{id:tripInfos.id_point_disembark}});
        const infoDistrictDisembark = await District.findAll({where:{id:tripInfos.id_district_disembark}});
        const namesPoints = infoDistrictDisembark[0].name +' - '+infopointDisembark[0].name;

        res.json(namesPoints);
    },
async listTripInfo(req,res){
    const {id_trip} =  req.params;

    const infosTrip = await Trip.findByPk(id_trip);

    res.json(infosTrip);
},
async checkTripUser(req,res){
    const {id_user} = req.params;

    const userTrip = await PassengerTrip.findOne({where:{id_user}});

    if(userTrip)
        return res.json(userTrip)

    return res.json('Não a usuarios');
    

},
        async checkTripStatus(req,res){
             const {id} = req.params;
            const TripStatus = await Trip.findByPk(id);
            if(!TripStatus)
                return res.json('Viagem nao existe');

            return res.json(TripStatus)



        },
        async cancel(req,res){
            const {id_trip,id_user} = req.params;
            //subtrair pessoa da viagem
            const trip = await Trip.findOne({where:{id:id_trip}})
            const tripCancel = await Trip.update({ people:trip.people-1  }, { where: { id: id_trip} });


            const peopleCancel = await PassengerTrip.destroy({where:{id_trip,id_user}})
            if(tripCancel && peopleCancel)
                return res.json('Cancelada com sucesso')




        }
   
}
