const express = require("express");
const {
  getHomepage,
  checkHelloWorld,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", checkHelloWorld);

module.exports = router;
