const express = require("express");
const getorderDetails = require("../controllers/orderDetailsController");
const router = express.Router();

router.get("/", getorderDetails);

module.exports = router;
