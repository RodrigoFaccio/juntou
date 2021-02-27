const express = require('express');
//usuarios
const   UserController  = require('./controllers/UserController');
const UserMotoristaController = require('./controllers/UserMotoristaController');
//token
const TokenController = require('./controllers/TokenController');
const LoginMiddwares = require('./middwares/LoginMiddwares.js');
//localidades
const BairrosController = require('./controllers/BairrosController');
const EmbarqueController = require('./controllers/EmbarqueController');
const DesembarqueController = require('./controllers/DesembarqueController');
// Viagens
const Viagens = require('./controllers/ViagensController');
const PassageiroViagens = require('./controllers/PassageirosViagensController');


//testes









const routes = express.Router();

//passageiros
routes.post('/passageiro/cadastro', UserController.store);
routes.get('/passageiro/lista', UserController.index);
routes.post('/passageiro/login', TokenController.loginPassageiro);

//motoristas

routes.post('/user/motorista', UserMotoristaController.store);
routes.post('/user/motorista/login', TokenController.loginMotorista);
//bairros
routes.post('/bairro/cadastro', BairrosController.store);
routes.get('/bairro/lista', BairrosController.list);
routes.get('/bairro/:nome/pesquisa', BairrosController.like);


//embarques
routes.post('/embarque/:id_bairro/cadastro', EmbarqueController.store);
routes.get('/embarque/:id_bairro/list', EmbarqueController.list);
routes.get('/embarque/:nome/pesquisa', EmbarqueController.like);
//desembarques

routes.post('/desembarque/:id_embarque/cadastro', DesembarqueController.store);

//viagens
routes.get('/viagens/lista', Viagens.listAll);
routes.get('/viagens/list/avaible', Viagens.avaible);


routes.post('/viagens/:id_user/:id_bairro/:id_embarque/:id_desembarque/cadastro', Viagens.store);
routes.get('/viagens/motoristas/:id_viagem/lista', PassageiroViagens.indexMotorista);














//exportar as rotas 
module.exports = routes; 