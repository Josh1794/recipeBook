const router = require("express").Router();
const { Step } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const steps = await Step.findAll();
    if (steps) res.json(steps);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});
