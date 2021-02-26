const { Model, DataTypes } = require('sequelize');
const { static } = require('express');
const bcrypt = require('bcryptjs');


class ViagensPessoas extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            id_viagem: DataTypes.INTEGER,
            horario: DataTypes.STRING,
            nome_embarque:DataTypes.STRING,





        }, {
            sequelize
        });


    }




}
module.exports = ViagensPessoas;