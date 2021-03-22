const Trip = require('../models/Viagens');
const TripPassenger = require('../models/PassageirosViagens');



module.exports = {
    async indexMotorista(req, res) {
        const { id_trip } = req.params;
        const trip = await Trip.findByPk(id_trip);
        const id_passenger = await TripPassenger.findAll({ where: { id_trip } });
       
        return res.json(id_passenger);



    }

}
