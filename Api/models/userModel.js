const {models} = require('./index');


module.exports = {

    AlreadyEmail  : async(email) => {
        try {
            const checkEmail = await models.User.findOne({
                where : {
                    email : email
                }
            })
            return {
                response : checkEmail
            }
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    }
}