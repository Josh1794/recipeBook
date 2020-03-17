const router = require("express").Router();
const { Book } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    if (books) res.json(books);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleBook = await Book.findByPk(req.params.id);
    if (singleBook) res.send(singleBook);
    else res.status(404).send("404");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newBook = await Book.create({
      name: req.body.name,
      description: req.body.description,
      userId: req.body.userId
    });
    res.status(201).send(newBook);
  } catch (error) {
    next(error);
  }
});
// NEED TO ADD DELETE AND EDIT ROUTES
router.delete("/delete/:bookId", async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findOne({
      where: {
        bookId
      }
    });

    if (!book) res.sendStatus(404);
    else {
      book.destroy();
      res.sendStatus(201);
    }
  } catch (error) {
    next(error);
  }
});
