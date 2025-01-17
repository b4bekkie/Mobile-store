const roleService = require('../services/roleService');
const Joi = require('joi')


const createRoleSchema = Joi.object({
    roleName : Joi.string().required()

})

module.exports = {

    createRole : async(req,res) => {
        try {

            const validate = await createRoleSchema.validateAsync(req.body)
            const createRole = await roleService.createRole(validate)
            if(createRole.error) {
                return res.send({response : createRole.error})
            }
            return res.send({response : createRole.response})
        } catch (error) {
            return {
                error : error.message
            }
        }
    },

    deleteRole :async (req,res)=> {
        try {
            const deleteRole = await roleService.deleteRole(req.body)

            if(deleteRole.error) {
                return res.send({response : deleteRole.error})
            }
            return res.send({response : deleteRole.response})
        } catch (error) {
            return {
                error : error.message
            }
        }
    },
    getAllRoles  : async(req,res) => {
          try {
            const getAllRoles = await roleService.getAllRoles()
          if(getAllRoles.error) {
            return res.send({response : getAllRoles.error})
          }
          return res.send({response : getAllRoles.response})
          } catch (error) {
            return  {
                error : error.message
            }
            
          }
    }
}