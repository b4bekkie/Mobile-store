const {models} = require('./index');


module.exports = {

    createRole : async(roleId,roleName)=> {
        try {
            const createRole = await models.Role.create({
                roleId,
                roleName
            })
            return {
                response : createRole
            }
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    },

    deleteRole : async (roleId)=> {
        try {

            const deleteRole = await models.Role.destroy({
                where : {
                    roleId :roleId
                }
            })
            return {
                response : deleteRole
            }
            
        } catch (error) {

            return {
                response : error.message
            }
            
        }
    },

    getAllRoles : async() => {
        try {
            const getAllRoles = await models.Role.findAll();
        return{
            response : getAllRoles
        }
        } catch (error) {
         return {
            error : error.message
         }   
        }
    }
}