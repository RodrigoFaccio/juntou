module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'juntouApp',
    define: {
        timestamps: true,
        underscored: true,
    },
}