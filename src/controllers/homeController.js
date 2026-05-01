const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home");
};

const checkHelloWorld = (req, res) => {
  res.render("sample");
};

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body;
  if (!email || !name || !city) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Create user failed",
        });
      }

      console.log(results);

      return res.status(201).json({
        message: "Create user succeed!",
        userId: results.insertId,
        data: { email, name, city },
      });
    },
  );
};

module.exports = {
  getHomepage,
  checkHelloWorld,
  postCreateUser,
};
