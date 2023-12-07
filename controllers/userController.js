const { prismaClient } = require('@prisma/client');
const prisma = new prismaClient();
function getUsers(req, res) {
   
    return prisma.user.findMany();
    

}
module.exports = getUsers;