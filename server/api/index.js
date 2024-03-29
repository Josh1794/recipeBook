const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/books", require("./books"));
router.use("/recipes", require("./recipes"));
router.use("/ingredients", require("./ingredients"));
router.use("/steps", require("./steps"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
