const express = require("express");
const {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", checkHelloWorld);

router.post("/create-user", postCreateUser);

router.get("/create", getCreateUserPage);

router.get("/update/:id", getUpdateUserPage);

router.post("/update-user", postUpdateUser);

module.exports = router;
