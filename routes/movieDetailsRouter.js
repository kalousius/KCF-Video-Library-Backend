const express = require("express");
const router = express.Router();
const {
  getMovieDetails,
  createMovie,
} = require("../controllers/movieDetailsController");

// GET movie details
router.get("/", getMovieDetails);

// GET: Render the add movie form
router.get("/add", (req, res) => {
  // Use __dirname to get the current directory
  res.sendFile(__dirname + "/../Views/addMovieForm.html");
});

// POST create new movie
router.post("/create", createMovie);

module.exports = router;
