const express = require('express');
//usuarios
const   UserController  = require('./controllers/UserController');
const UserMotoristaController = require('./controllers/UserMotoristaController');
//token
const TokenController = require('./controllers/TokenController');
const LoginMiddwares = require('./middwares/LoginMiddwares.js');
//Biarros
const BairrosController = require('./controllers/BairrosController');

// Viagens
const Viagens = require('./controllers/ViagensController');
const PassageiroViagens = require('./controllers/PassageirosViagensController');

//Pontos
const Point = require('./controllers/PointController');












const routes = express.Router();

//passageiros
routes.post('/passageiro/cadastro', UserController.store);
routes.get('/passageiro/lista', UserController.index);
routes.post('/passageiro/login', TokenController.loginPassageiro);

//motoristas

routes.post('/motorista/cadastro', UserMotoristaController.store);
routes.post('/motorista/login', TokenController.loginMotorista);
//bairros
routes.post('/bairro/cadastro', BairrosController.store);
routes.get('/bairro/lista', BairrosController.list);
routes.get('/bairro/:name/pesquisa', BairrosController.like);
routes.get('/bairro/:name/like/dominante',BairrosController.dominante);
routes.get('/bairro/:name/like/noDominante',BairrosController.noDominante);
routes.get('/bairro/:id_district/info',BairrosController.info);






//Pontos
routes.post('/point/:id_district/cadastro',Point.store);
routes.get('/point/:id_district/like',Point.like);
routes.get('/point/:id_district/list',Point.list);
routes.get('/point/:id_point/info',Point.info);


0





//viagens
routes.get('/trip/lista', Viagens.listAll);
routes.get('/trip/list/available', Viagens.available);
routes.get('/trip/:id_trip/finalization', Viagens.finalization);
//criação de viagem
routes.post('/trip/:id_district_embark/:id_point_embark/:id_district_disembark/:id_point_disembark/:id_user/create', Viagens.createTrip);













//exportar as rotas 
module.exports = routes; 