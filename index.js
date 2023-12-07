// index.js
const express = require("express");
//const server = express();
const app = express();
const userRouter = require("./routes/userRouter");
const movieCatalogRouter = require("./routes/movieCatalogRouter");
const movieDetailsRouter = require("./routes/movieDetailsRouter");
const orderDetailsRouter = require("./routes/orderDetailsRouter");
const paymentDetailsRouter = require("./routes/paymentDetailsRouter");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/movieDetails", movieDetailsRouter);
app.use("/api/v1/movieCatalog", movieCatalogRouter);
app.use("/api/v1/orderDetails", orderDetailsRouter);
app.use("/api/v1/paymentDetails", paymentDetailsRouter);

app.get("/api/v1/", (req, res) => {
  res.send("hello world");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
