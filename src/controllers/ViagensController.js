const Trip = require('../models/Viagens');
const PassengerTrip = require('../models/PassageirosViagens');
const Passenger = require('../models/UserPassageiro');
const District = require('../models/Bairros');
const Disembark = require('../models/Desembarque');
const Embark = require('../models/Embarque');
const {Op} =require('sequelize');
const { create } = require('../models/Viagens');






module.exports = {
    async store(req, res) {
        const {
           time
        } = req.body;
        const { id_user, id_embark,id_disembark,id_district } = req.params;

        const tripTrue = await Trip.findOne({
            where:{
            time,
            id_district,

            people:{
                [Op.lt]: 4,
            }
           }});
           console.log("==============================================")
             async function nameTrip(){
               
                const embark = await Embark.findByPk(id_embark);
                const disembark = await Disembark.findByPk(id_disembark);
                const nameEmbarkDisembark =  embark.name+"-"+disembark.name;
                return(nameEmbarkDisembark);


            }
             async function searchNamePassenger(){
                const passenger = await Passenger.findByPk(id_user);
                return(passenger.name);
            }
        if(tripTrue){
            const people = tripTrue.people + 1;
            const trip = await Trip.update({ people:people  }, { where: { id: tripTrue.id } });
            const namePassenger  = await searchNamePassenger();
           const name_embark =  namePassenger.split("-");
            const peopleTrip = await PassengerTrip.create({
                name:namePassenger,
                id_trip:tripTrue.id,
                time,
                name_embark:name_embark[0],
                checked:"true"


            });
            return res.json({peopleTrip});
        }else{
            const name = await nameTrip();
            const createTrip = await Trip.create({
                name:name,
                id_disembark,
                id_embark,
                id_district,
                people:1,
                time,
                situation:"0"

            });
            const namePassenger  = await searchNamePassenger();
            const name_embark =  namePassenger.split("-");
            const peopleTrip = await PassengerTrip.create({
                name:namePassenger,
                id_trip:createTrip.id,
                time,
                name_embark:name_embark[0],
                checked:"true"

            });
            return res.json(createTrip);
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
    }

}
