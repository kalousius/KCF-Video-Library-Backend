const express = require("express");
const getmovieDetails = require("../controllers/movieDetailsController");
const router = express.Router();

router.get("/", getmovieDetails);

module.exports = router;
