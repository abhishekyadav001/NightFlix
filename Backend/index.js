const express = require("express");
require("dotenv").config();
const app = express();
const { connection } = require("./config/mongose.module");

const port = process.env.port || 51230;

app.use(express.json());

const { userRoute } = require("./route/users.route");
app.use("/users", userRoute);

app.use("/", (req, res) => {
  res.send("Home Page");
});

app.listen(8080, async () => {
  try {
    await connection();
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`http://localhost:${port}/`);
});
