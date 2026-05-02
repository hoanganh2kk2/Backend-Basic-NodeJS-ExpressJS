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

const getUpdateUserPage = async (req, res) => {
  const userId = req.params.id;
  const [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId],
  );
  console.log(">>> check results: ", results[0]);

  const user = results && results.length > 0 ? results[0] : {};
  return res.render("update", { user: user });
};

module.exports = {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
};
