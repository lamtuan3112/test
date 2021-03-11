const express = require("express");
const bodyParser = require("body-parser");
var app = express()
const db = require('./src/config/database');
const PORT = process.env.PORT || 1234;

app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());
app.use(express.json())

const routers = require('./src/routes/index');
app.use("/test/api", routers);
app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});


// db.sequelize.sync({force: true}).then(() => {
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;