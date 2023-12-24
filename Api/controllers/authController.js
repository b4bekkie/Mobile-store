const authService = require('../services/authService');

module.exports = {

    signUp :async (req,res) => {
       try {
        const createUser = await authService.signUp(req.body) 
        if(createUser.error) {
            return res.send({response : createUser.error})
        }
        return res.send({response : createUser.response})

       } catch (error) {
        return res.send({error : error.message})
        
       }
    }
}