const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use("/", (req, res) => {
  res.send("Home Page");
});
const port = process.env.port || 51230;

app.listen(8080, () => {
  console.log(`http://localhost:${port}/`);
});
