const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser"); // Import body-parser
const path = require("path");

const app = express();
const prisma = new PrismaClient();

// Use body-parser middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Route to serve the addMovieForm.html
app.get("/add-movie-form", (req, res) => {
  const filePath = path.join(__dirname, "views", "addMovieForm.html");
  res.sendFile(filePath);
});

// Serve the users.html file when the root route is accessed
app.get("/users.html", (req, res) => {
  const filePath = path.join(__dirname, "views", "users.html");
  res.sendFile(filePath);
});

app.get("/api/v1/", async (req, res) => {
  // Example: Fetch all users using Prisma Client
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});

// Close the Prisma Client when your application exits
// process.on("beforeExit", () => {
//   prisma.$disconnect();
// });
