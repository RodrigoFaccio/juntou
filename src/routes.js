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
routes.get('/',(req,res)=>{
    res.json('nada encontrado')
});


routes.get('/passageiro/lista', UserController.index);
routes.post('/passageiro/login', TokenController.loginPassageiro);
routes.get('/passageiro/:id/datails', UserController.datails);
routes.post('/passageiro/:id/alteracao', UserController.alteracao);




//motoristas


routes.post('/motorista/cadastro', UserMotoristaController.store);
routes.get('/motorista/:id/list', UserMotoristaController.listUserId);

routes.post('/motorista/login', TokenController.loginMotorista);
routes.get('/motorista/:id/datails', UserMotoristaController.datails);

routes.post('/motorista/:id/alteracao', UserMotoristaController.alteracao);

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
routes.get('/point/:name/:id_district/pesquisa',Point.search);

routes.get('/point/:id_district/list',Point.list);
routes.get('/point/:id_point/info',Point.info);








//viagens
routes.get('/trip/lista', Viagens.listAll);
routes.get('/trip/list/available', Viagens.available);
routes.get('/trip/:id_trip/:id_user/finalization', Viagens.finalization);
routes.get('/trip/:id_district_embark/:id_district_disembark/list',Viagens.ListHoursExist);
routes.get('/trip/:id_trip/listInfos',Viagens.listTripInfo);
routes.get('/trip/:id_user/checkTripUser',Viagens.checkTripUser);
routes.get('/trip/:id/checkTripStatus',Viagens.checkTripStatus);
routes.get('/trip/:id_trip/:id_user/cancel',Viagens.cancel);


// viagens motorista 
routes.get('/trip/:id_trip/listPassenger',Viagens.listPassengerId);

routes.get('/trip/:id/listInfosTrip',Viagens.listInfosTripEmbark);
routes.get('/trip/:id/listInfosTripDisembark',Viagens.listInfosTripDisembark);
//criação de viagem
routes.post('/trip/:id_district_embark/:id_point_embark/:id_district_disembark/:id_point_disembark/:id_user/create', Viagens.createTrip);
routes.post('/trip/:id_trip/:id_user/createExist',Viagens.createTripExist);














//exportar as rotas 
module.exports = routes; 