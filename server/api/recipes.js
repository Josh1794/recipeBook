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

router.get("/:id", async (req, res, next) => {
  try {
    const singleRecipe = await Recipe.findByPk(req.params.id);
    if (singleRecipe) res.send(singleRecipe);
    else res.status(404).send("404");
  } catch (err) {
    next(err);
  }
});
