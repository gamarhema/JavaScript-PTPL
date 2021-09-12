const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const middleware = require("./middleware/is-auth");

dotenv.config();

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(middleware);

const db = require("./app/models");

// drop the table if it already exists
db.sequelize.sync().then(() => console.log("done"));

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  // console.log(req.headers);
  res.json({ message: "Welcome to bezkoder application." });
});

// require("./app/routes/tutorial.routes")(app);
require("./app/routes/botol.routes")(app);
require("./app/routes/parameter.routes")(app);
require("./app/routes/vendor.routes")(app);
require("./app/routes/specification.routes")(app);
require("./app/routes/dataUji.routes")(app);

require("./app/routes/seal.routes")(app);
require("./app/routes/seal.parameter.routes")(app);
require("./app/routes/seal.vendor.routes")(app);
require("./app/routes/seal.specification.routes")(app);
require("./app/routes/seal.dataUji.routes")(app);

require("./app/routes/karton.routes")(app);
require("./app/routes/karton.parameter.routes")(app);
require("./app/routes/karton.vendor.routes")(app);
require("./app/routes/karton.specification.routes")(app);
require("./app/routes/karton.dataUji.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
