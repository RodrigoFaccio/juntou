const { Model, DataTypes } = require('sequelize');
const { static } = require('express');
const bcrypt = require('bcryptjs');


class Trip extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            id_embark: DataTypes.INTEGER,
            id_disembark: DataTypes.INTEGER,
            id_district: DataTypes.INTEGER,

            
            time: DataTypes.STRING,
            situation: DataTypes.STRING,

            people: DataTypes.INTEGER,




        }, {
            sequelize
        });


    }




}
module.exports = Trip;