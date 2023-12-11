const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all users
async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Create a new user
async function createUser(req, res) {
  try {
    const { fullName, email, username, password, role } = req.body;

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        username,
        password,
        role,
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Update an existing user
async function updateUser(req, res) {
  const userId = parseInt(req.params.id);
  const { username, email, password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
        password,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Delete a user
async function deleteUser(req, res) {
  const userId = parseInt(req.params.id);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    res.send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
