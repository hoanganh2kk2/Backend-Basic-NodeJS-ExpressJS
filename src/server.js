require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("../src/config/database");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

//test connection

//simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>> results = ", results); // results contains rows returned by server
});

app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`),
);
