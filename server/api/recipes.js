const router = require("express").Router();
const { Recipe } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll();
    if (recipes) res.json(recipes);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

//All Recipes from a specific book
router.get("/:bookId", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        bookId: req.params.bookId
      }
    });
    if (recipes) res.json(recipes);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

router.get("/:bookId/:id", async (req, res, next) => {
  try {
    const singleRecipe = await Recipe.findAll({
      where: {
        bookId: req.params.bookId,
        id: req.params.id
      }
    });
    if (singleRecipe) res.send(singleRecipe);
    else res.status(404).send("404");
  } catch (err) {
    next(err);
  }
});
