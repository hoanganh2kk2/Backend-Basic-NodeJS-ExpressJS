const express = require("express");
const {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", checkHelloWorld);

router.post("/create-user", postCreateUser);

router.get("/create", getCreateUserPage);

router.get("/update/:id", getUpdateUserPage);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postHandleDeleteUser);

module.exports = router;
