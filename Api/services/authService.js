const authModel = require('../models/authModel')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')


const {v4 : uuidV4} = require('uuid')

module.exports = {

    signUp :async (body)=> {


        try {


            const checkEmail = await userModel.AlreadyEmail(body.email)
            if(checkEmail.response) {
                return {
                    response : "Oops!Email already registered. Reset password for access."
                }
            }
            
        const userId = uuidV4()
        const salt = 10
         const password =   bcrypt.hashSync(body.password,salt)
         
        const createUser = await authModel.signUp(body.roleId,userId,body.userName,body.email,password)

        if(createUser.error) {
            return {
                response : createUser.error
            }
        }
        return {
            response : createUser.response
        }

        } catch (error) {
            return {
                error :error.message
            }
            
        }
    }
}