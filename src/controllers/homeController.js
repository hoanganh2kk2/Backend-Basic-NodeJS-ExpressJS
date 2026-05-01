const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home");
};

const checkHelloWorld = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  checkHelloWorld,
};
