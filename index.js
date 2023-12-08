// index.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
//const server = express();
const app = express();
const prisma = new PrismaClient();

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

app.get("/api/v1/", async (req, res) => {
  // Example: Fetch all users using Prisma Client
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
//close the prisma Client when your application exits

process.on("beforeExit", () => {
  prisma.$disconnect();
  //process.exit(0);
});
