require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'admin2',
    password:'juntou1234',
    database:'juntouApp',
    define: {
        timestamps: true,
        underscored: true,
    },
}