const { Sequelize} = require('sequelize');

const config = require('../config/Config.json')


const database = new Sequelize (config.db)


database.authenticate().then(()=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e.message)
});


module.exports = database;