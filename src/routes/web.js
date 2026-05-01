const express = require("express");
const {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", checkHelloWorld);

router.post("/create-user", postCreateUser);

module.exports = router;
