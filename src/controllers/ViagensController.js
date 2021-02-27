const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');
const Passageiro = require('../models/UserPassageiro');
const Bairro = require('../models/Bairros');
const Desembarque = require('../models/Desembarque');
const Embarque = require('../models/Embarque');
const {Op} =require('sequelize');






module.exports = {
    async store(req, res) {
        const {
           horario,
            pessoas
        } = req.body;
        const { id_user, id_embarque,id_desembarque,id_bairro } = req.params;

        const viagemExiste = await Viagens.findOne({
            where:{
            horario,
            id_bairro,

            pessoas:{
                [Op.lt]: 4,
            }
           }});
           console.log("==============================================")
        console.log(viagemExiste);

        const NomeBairro  = await Bairro.findOne({where:{id:id_bairro}});
        

        const NomeDesembarque  = await Desembarque.findOne({where:{id:id_desembarque}});
        const nome_embarque  = await Embarque.findOne({where:{id:id_embarque}});
        const user = await Passageiro.findOne({where:{id:id_user}});


        const nome = NomeBairro.nome+"-"+NomeDesembarque.nome;

        // //não tem a viagem s
        if(viagemExiste==null){
           
                const create_viagem = await Viagens.create({
                    nome,
                    id_embarque,
                    id_desembarque,
                    id_bairro,
                    horario,
                    pessoas:1,
                    situation:'0'
                 });
     
                 await PassageirosViagens.create({
                     nome:user.name,
                     id_viagem:create_viagem.id,
                     horario,
                     nome_embarque:nome_embarque.nome
     
     
                 });
                return res.json(create_viagem);
            

           
        }

       
            if (viagemExiste.pessoas < 4) {
                 const ViagemAddPessoas = await Viagens.findOne({where:{id:viagemExiste.id}});
                const totalpessoas = ViagemAddPessoas.pessoas + 1;
                const viagem = await Viagens.update({ pessoas: totalpessoas }, { where: { id: viagemExiste.id } });
                return res.json(viagemExiste);
       
            }else{
                const create_viagem = await Viagens.create({
                    nome,
                    id_embarque,
                    id_desembarque,
                    id_bairro,
                    horario,
                    pessoas,
                    situation:'0'

                 });
     
                 await PassageirosViagens.create({
                     nome:user.name,
                     id_viagem:create_viagem.id,
                     horario,
                     nome_embarque:nome_embarque.nome
     
     
                 });
                return res.json(create_viagem);
            }
            
        
       
        




    },
    async listAll(req, res) {
        const userslist = await Viagens.findAll();
        console.log(req.userId);

        return res.json(userslist);

    },
    async avaible(req,res){
        const avaible = await Viagens.findAll({where:{ 
            pessoas:{
            [Op.lt]: 4,
        }}});

        return res.json(avaible);
    }

}
