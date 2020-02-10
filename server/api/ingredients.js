const router = require("express").Router();
const { Ingredient } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll();
    if (ingredients) res.json(ingredients);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

router.get("/:recipeId", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      where: {
        recipeId: req.params.recipeId
      }
    });
    if (ingredients) res.json(ingredients);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});
