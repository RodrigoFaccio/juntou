const { Model, DataTypes } = require('sequelize');
const { static } = require('express');
const bcrypt = require('bcryptjs');


class Viagens extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            id_embarque: DataTypes.INTEGER,
            id_desembarque: DataTypes.INTEGER,
            id_bairro: DataTypes.INTEGER,

            
            horario: DataTypes.STRING,
            situation: DataTypes.STRING,

            pessoas: DataTypes.INTEGER,




        }, {
            sequelize
        });


    }




}
module.exports = Viagens;