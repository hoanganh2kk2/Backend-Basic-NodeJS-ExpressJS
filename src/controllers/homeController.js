const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home", { listUsers: results });
};

const checkHelloWorld = (req, res) => {
  res.render("sample");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
  );

  res.send("Create a new user successfully!");
};

const getCreateUserPage = (req, res) => {
  return res.render("create");
};

module.exports = {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
};
