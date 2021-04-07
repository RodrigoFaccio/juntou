const { Connection } = require('pg');
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserPassageiro = require('../models/UserPassageiro');
const UserMotorista = require('../models/UserMotorista');
const Bairros = require('../models/Bairros');
const Point = require('../models/Point');


const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');







const connection = new Sequelize(dbConfig);
//passar a conecção para do model
UserPassageiro.init(connection);
UserMotorista.init(connection);
Bairros.init(connection);
Point.init(connection);


Viagens.init(connection);
PassageirosViagens.init(connection);












module.exports = connection;