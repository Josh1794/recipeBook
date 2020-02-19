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

// router.delete("/delete/:bookId", async (req, res, next) => {
//   try {
//     const bookId = req.params.bookId;
//     const activeCart = await Cart.getUsersCart(req.user.id);
//     const product = await ProductCart.findOne({
//       where: {
//         productId,
//         cartId: activeCart.id
//       }
//     });

//     if (!product) res.sendStatus(404);
//     else {
//       product.destroy();
//       res.sendStatus(201);
//     }
//   } catch (error) {
//     next(error);
//   }
// });
