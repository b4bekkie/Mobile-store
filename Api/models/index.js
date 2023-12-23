const sequelize = require('../bin/dbConnection');


const models = {}
const db = {};


db.sequelize = sequelize;
sequelize.models = models;




module.exports = {db,models}