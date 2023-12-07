const express = require("express");
const getpaymentDetails = require("../controllers/paymentDetailsController");
const router = express.Router();

router.get("/", getpaymentDetails);

module.exports = router;
