const sequelize = require('../bin/dbConnection');

const Role = require('./definition/role')
const User = require('./definition/user')



const models = {Role,User}
const db = {};

Role.hasMany(User,{foreignKey : " roleId"})
User.belongsTo(Role,{foreignKey : " roleId"})


db.sequelize = sequelize;
sequelize.models = models;





module.exports = {db,models}