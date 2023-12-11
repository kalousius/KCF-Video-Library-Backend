//function getmovieDetails(req, res) {
// res.send("Here are movie Details");
//}
//module.exports = getmovieDetails;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getMovieDetails(req, res) {
  // Implement logic to fetch movie details from the database
}

async function createMovie(req, res) {
  try {
    const { title, description, director, price, rating, imageUrl, movieId } =
      req.body;

    const newMovie = await prisma.movieDetails.create({
      data: {
        title,
        description,
        director,
        price,
        rating,
        imageUrl,
        movieId,
      },
    });

    res.json(newMovie);
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getMovieDetails, createMovie };
