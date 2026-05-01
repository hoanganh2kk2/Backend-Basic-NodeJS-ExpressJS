const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home");
};

const checkHelloWorld = (req, res) => {
  res.render("sample");
};

const postCreateUser = (req, res) => {
  console.log(">>> check body: ", req.body);
  res.send("Create new user");
};

module.exports = {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
};
