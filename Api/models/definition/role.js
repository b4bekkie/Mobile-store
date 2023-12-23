const sequelize = require('../../bin/dbConnection');

const {Model , DataTypes} = require('sequelize')


class Role extends Model{}

Role.init({
    roleId : {
        primaryKey : true,
        type : DataTypes.STRING()
    }
    ,
    roleName : {
        type  : DataTypes.STRING(),
        allowNull : false
    }
},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Roles"
})
module.exports = Role