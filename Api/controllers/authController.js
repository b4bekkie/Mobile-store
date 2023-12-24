
const authService = require('../services/authService');
const Joi = require('joi')


const signUpSchema = Joi.object({
    roleId : Joi.string().required(),
    userName: Joi.string().alphanum().min(3).max(30).required(),
    email : Joi.string().email().required() ,
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports = {

    signUp :async (req,res) => {
       try {

        const validate =   await signUpSchema.validateAsync(req.body)
        const createUser = await authService.signUp(validate) 
        if(createUser.error) {
            return res.send({response : createUser.error})
        }
        return res.send({response : createUser.response})

       } catch (error) {
        return res.send({error : error.message})
        
       }
    }
}