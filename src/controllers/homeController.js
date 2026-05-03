const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservice");

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
  const user = await getUserById(userId);

  return res.render("update", { user: user });
};

const postUpdateUser = async (req, res) => {
  const { userId, email, name, city } = req.body;
  console.log(">>> check:", userId, email, name, city);

  await updateUserById(email, name, city, userId);

  // res.send("Update user successfully!");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);

  res.render("delete", { userDelete: user });
};

const postHandleDeleteUser = async (req, res) => {
  const userId = req.body.userId;
  await deleteUserById(userId);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser,
};
