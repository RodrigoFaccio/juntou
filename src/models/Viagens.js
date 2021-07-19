const { Model, DataTypes } = require('sequelize');
const { static } = require('express');
const bcrypt = require('bcryptjs');


class Trip extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            id_district_embark: DataTypes.INTEGER,
            id_point_embark: DataTypes.INTEGER,
            id_district_disembark: DataTypes.INTEGER,
            id_point_disembark: DataTypes.INTEGER,
            time: DataTypes.STRING,

            people: DataTypes.INTEGER,
            status: DataTypes.STRING,
            id_user: DataTypes.STRING,







        }, {
            sequelize
        });


    }




}
module.exports = Trip;