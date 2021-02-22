const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');
const Passageiro = require('../models/UserPassageiro');



module.exports = {
    async store(req, res) {
        const {
            nome,
            id_embarque,
            id_desembarque,
            horario,
            pessoas
        } = req.body;
        const { id_user } = req.params;



        const viagemtrue = await Viagens.findOne({ where: { id_embarque, id_desembarque, horario } });
        const nomePassageiro = await Passageiro.findOne({ where: { id: id_user } });

        if (viagemtrue) {
            const viagempessoas = await Viagens.findByPk(viagemtrue.id);

            if (viagempessoas.pessoas == 4) {
                return res.json({ messagem: 'Viagem lotada ' })
            }

            const pessoas = viagempessoas.pessoas + 1;
            console.log(pessoas);

            const viagem = await Viagens.update({ pessoas: pessoas }, { where: { id: viagemtrue.id } });
            const user_viagem = await PassageirosViagens.create({
                nome: nomePassageiro.name,
                id_viagem: viagemtrue.id,
                horario: viagemtrue.horario
            });


            return res.json(user_viagem);

        }


        const viagem = await Viagens.create({
            nome,
            id_embarque,
            id_desembarque,
            horario,
            pessoas
        });
        if (viagem) {
            await PassageirosViagens.create({
                nome: nomePassageiro.name,
                id_viagem: viagem.id,
                horario: viagem.horario
            });
        }


        return res.json(viagem);


    },
    async index(req, res) {
        const userslist = await Viagens.findAll();
        console.log(req.userId);

        return res.json(userslist);

    },

}
