const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

// Display list of all Authors.
exports.author_list = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Author list");
  try {
    const list_authors = await AuthorModel.find().sort([
      ["family_name", "ascending"],
    ]);
    //Successful, so render
    res.render("author_list", {
      title: "Author List",
      author_list: list_authors,
    });
  } catch (error) {
    console.log(`Error fetching list_authors: ${error.message}`);
    res.status(500);
    res.send("Error fetching list_authors");
  }
};

// Display detail page for a specific Author.
exports.author_detail = async (req, res) => {
  // res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
  try {
    const authorDetail = await AuthorModel.findById(req.params.id);

    const authors_books = await BookModel.find(
      { author: req.params.id },
      "title summary"
    );

    if (authorDetail === null) {
      // No results.
      var err = new Error("Author not found");
      err.status = 404;
    }
    // Successful, so render.
    res.render("author_detail", {
      title: "Author Detail",
      author: authorDetail,
      author_books: authors_books,
    });
  } catch (error) {
    console.error(`Error fetching author details: ${error.message}`);
    res.sendStatus(500);
  }
};

// Display Author create form on GET.
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
