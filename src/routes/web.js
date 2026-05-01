const express = require("express");
const {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", checkHelloWorld);

router.post("/create-user", postCreateUser);

router.get("/create", getCreateUserPage);

module.exports = router;
