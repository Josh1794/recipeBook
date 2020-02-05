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

router.get("/:id", async (req, res, next) => {
  try {
    const singleIngredient = await Ingredient.findByPk(req.params.id);
    if (singleIngredient) res.send(singleIngredient);
    else res.status(404).send("404");
  } catch (err) {
    next(err);
  }
});
