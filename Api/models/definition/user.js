const sequelize = require('../../bin/dbConnection');

const {Model , DataTypes} = require('sequelize')


class User extends Model{}

User.init({
    userId : {
        primaryKey : true,
        type : DataTypes.STRING()
    }
    ,
    userName : {
        type  : DataTypes.STRING(),
        allowNull : false
    },
    email : {
        type  : DataTypes.STRING(),
        allowNull : false
    },
    password : {
        type  : DataTypes.STRING(),
        allowNull : false
    }
},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Users"
})
module.exports = User