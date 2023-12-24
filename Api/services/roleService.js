const roleModel = require('../models/roleModel');
const { v4: uuidV4 } = require('uuid');

module.exports = {

    createUser  : async(body) => {

        try {
            const roleId = uuidV4()
            const createUser = await roleModel.createRole(roleId,body.roleName)
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
                error : error.message 
            }
            
        }

    },
    deleteRole : async(body)=> {
        try {
            const deleteRole = await roleModel.deleteRole(body.roleId);
            if(deleteRole.error){
                return {
                    response : deleteRole.error
                }
            }
            return {
                response : deleteRole.response
            }
        } catch (error) {
            return {
                error : error.message
            }
        }
    },
    getAllRoles  : async()=> {
        try {
            const getAllRoles = await roleModel.getAllRoles();
            if(getAllRoles.error) {
                return {
                    response : getAllRoles.error
                }
            }
            return {
                response : getAllRoles.response 
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    }
}
