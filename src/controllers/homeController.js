const getHomepage = (req, res) => {
  //process data
  //call model
  res.send("Hello World!!!");
};

const checkHelloWorld = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  checkHelloWorld,
};
