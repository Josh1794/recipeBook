const router = require("express").Router();
const { Book } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log(req);
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
