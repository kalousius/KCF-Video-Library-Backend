const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function getUsers(req, res) {
  return prisma.user.findMany();
}

module.exports = getUsers;
