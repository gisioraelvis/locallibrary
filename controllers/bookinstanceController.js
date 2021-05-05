var BookInstanceModel = require("../models/bookinstanceModel");

// Display list of all BookInstances.
exports.bookinstance_list = async (req, res) => {
  try {
    const list_bookinstances = await BookInstanceModel.find().populate("book");
    // Successful, so render
    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: list_bookinstances,
    });
  } catch (error) {
    console.log(`Error fetching list_bookinstances: ${error.message}`);
    res.status(500);
    res.send("Error fetching list_bookinstances");
  }
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res) => {
  // res.send("NOT IMPLEMENTED: BookInstance detail: " + req.params.id);
  try {
    const bookinstance = await BookInstanceModel.findById(
      req.params.id
    ).populate("book");

    if (bookinstance === null) {
      // No results.
      var err = new Error("Book copy not found");
      err.status = 404;
    }
    // Successful, so render.
    res.render("bookinstance_detail", {
      title: "Copy: " + bookinstance.book.title,
      bookinstance: bookinstance,
    });
  } catch (error) {
    console.log(`Error Fetching bookInstance details: ${err.message}`);
    res.sendStatus(500);
  }
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
