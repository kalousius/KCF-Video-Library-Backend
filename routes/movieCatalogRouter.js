const express = require("express");
const getmovieCatalog = require("../controllers/movieCatalogController");
const router = express.Router();

router.get("/", getmovieCatalog);

module.exports = router;
