// In userRouter.js or a similar file
const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController"); // Assuming you have a controller for user actions

// Handle POST request to create a new user
router.post("/", createUser);

// Handle GET request to retrieve users
router.get("/", getUsers);

module.exports = router;

//This userRouter.js file now imports the createUser function from the userController.js file and uses it to handle the POST request for creating a new user. Make sure to import and use other functions from the userController.js
//file in a similar way for other CRUD operations if needed.
