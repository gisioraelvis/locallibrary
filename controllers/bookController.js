var BookModel = require("../models/bookModel");
var AuthorModel = require("../models/authorModel");
var GenreModel = require("../models/genreModel");
var BookInstanceModel = require("../models/bookinstanceModel");

exports.index = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Site Home Page");
  try {
    const book_count = await BookModel.countDocuments({}); // Pass an empty object as match condition to find all documents of this collection

    const book_instance_count = await BookInstanceModel.countDocuments({});

    const book_instance_available_count = await BookInstanceModel.countDocuments(
      {
        status: "Available",
      }
    );

    const author_count = await AuthorModel.countDocuments({});

    const genre_count = await GenreModel.countDocuments({});

    res.render("index", {
      title: "Local Library Home",
      books: book_count,
      bookInstances: book_instance_count,
      availableBookInstances: book_instance_available_count,
      authors: author_count,
      genres: genre_count,
    });
  } catch (error) {
    console.error(`Error getting count: ${error.message}`);
    res.sendStatus(500);
    process.exit(1);
  }
};

// Display list of all books.
exports.book_list = async (req, res) => {
  try {
    const list_books = await BookModel.find({}, "title author").populate(
      "author"
    );

    res.render("book_list", { title: "Book List", book_list: list_books }); //Successful, so render
  } catch (error) {
    console.error(`Error fetching book_list: ${error.message}`);
    res.sendStatus(500);
  }
};

// Display detail page for a specific book.
exports.book_detail = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Book detail: " + req.params.id);

  try {
    const book = await BookModel.findById(req.params.id)
      .populate("author")
      .populate("genre");

    const book_instance = await BookInstanceModel.find({ book: req.params.id });

    if (book === null) {
      // No results.
      var err = new Error("Book not found");
      err.status = 404;
    }
    // Successful, so render.
    res.render("book_detail", {
      title: book.title,
      book: book,
      book_instances: book_instance,
    });
  } catch (error) {
    console.log(`Error fetching book deatails: ${error.message}`);
    res.sendStatus(500);
  }
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
