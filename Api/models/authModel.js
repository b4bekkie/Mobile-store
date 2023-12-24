 const {models} = require('./index');


 module.exports = {

    signUp :  async(roleId,userId,userName,email,password)=>{
        try {

            const createUser = await models.User.create({
                roleId,
                userId,
                userName,
                email,
                password
            })
            return{
                response : createUser
            }
            
        } catch (error) {
            return {
                error : error.message
            }
        }
    }
 }