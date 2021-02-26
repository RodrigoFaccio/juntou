const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');



module.exports = {
    async indexMotorista(req, res) {
        const { id_viagem } = req.params;
        const viagem = await Viagens.findByPk(id_viagem);
        const id_passageiro = await PassageirosViagens.findAll({ where: { id_viagem } });
       
        return res.json(id_passageiro);



    }

}
