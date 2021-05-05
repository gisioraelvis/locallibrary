const GenreModel = require("../models/genreModel.js");
const BookModel = require("../models/bookModel.js");

// Display list of all Genre.
exports.genre_list = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Genre list");
  try {
    const genre_list = await GenreModel.find().sort([["name", "ascending"]]);

    //Successful, so render
    res.render("genre_list", {
      title: "Genre List",
      genres: genre_list,
    });
  } catch (error) {
    console.log(`Error fetching genre_list: ${error.message}`);
    res.status(500);
    res.send("Error fetching genre_list");
  }
};

// Display detail page for a specific Genre.
exports.genre_detail = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Genre detail: " + req.params.id);

  try {
    const genres = await GenreModel.findById(req.params.id);

    const genre_books = await BookModel.find({ genre: req.params.id });

    if (genres === null) {
      // No results.
      let err = new Error("Genre not found");
      err.status = 404;
    }
    // Successful, so render
    res.render("genre_detail", {
      title: "Genre Detail",
      genre: genres,
      genre_books: genre_books,
    });
  } catch (error) {
    console.error(`Error fetching genres: ${error.message}`);
    res.sendStatus(500);
    process.exit(1);
  }
};

// Display Genre create form on GET.
exports.genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
