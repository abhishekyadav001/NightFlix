const express = require("express");
require("dotenv").config();
const app = express();
const { connection } = require("./config/mongose.module");

app.use(express.json());

const { userRoute } = require("./route/users.route");
app.use("/users", userRoute);

app.use("/", (req, res) => {
  res.send("Home Page");
});

app.listen(8080, () => {
  connection();
  console.log(`http://localhost:${8080}`);
});
