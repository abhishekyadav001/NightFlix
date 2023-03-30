const mongoose = require("mongoose");
require("dotenv").config();

const connection = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

module.exports = { connection };
