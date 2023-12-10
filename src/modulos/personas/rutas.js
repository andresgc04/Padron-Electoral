const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Personas Ok");
});

module.exports = router;
