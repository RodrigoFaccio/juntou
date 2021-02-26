const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');
const Passageiro = require('../models/UserPassageiro');
const Bairro = require('../models/Bairros');
const Desembarque = require('../models/Desembarque');
const Embarque = require('../models/Embarque');






module.exports = {
    async store(req, res) {
        const {
           horario,
            pessoas
        } = req.body;
        const { id_user, id_embarque,id_desembarque,id_bairro } = req.params;

        const viagemExiste = await Viagens.findOne({where:{horario}});
        const viagemid = viagemExiste.id;

        const NomeBairro  = await Bairro.findOne({where:{id:id_bairro}});
        

        const NomeDesembarque  = await Desembarque.findOne({where:{id:id_desembarque}});
        const nome_embarque  = await Embarque.findOne({where:{id:id_embarque}});
        const user = await Passageiro.findOne({where:{id:id_user}});


        const nome = NomeBairro.nome+"-"+NomeDesembarque.nome;

        // //não tem a viagem s
        if(viagemExiste==''){
            if(viagemExiste.pessoas<=4){
                const create_viagem = await Viagens.create({
                    nome,
                    id_embarque,
                    id_desembarque,
                    id_bairro,
                    horario,
                    pessoas
                 });
     
                 await PassageirosViagens.create({
                     nome:user.name,
                     id_viagem:create_viagem.id,
                     horario,
                     nome_embarque:nome_embarque.nome
     
     
                 });
                return res.json(create_viagem);
            }

           
        }
        const ViagemAddPessoas = await Viagens.findOne({where:{id:viagemid}});
       const totalpessoas = ViagemAddPessoas.pessoas + 1;
        const viagem = await Viagens.update({ pessoas: totalpessoas }, { where: { id: viagemid } });
        return res.json(viagemExiste);
       
        




    },
    async index(req, res) {
        const userslist = await Viagens.findAll();
        console.log(req.userId);

        return res.json(userslist);

    },

}
