const mongoose = require("mongoose");

const connection = () => {
  return mongoose.connect(process.env.url);
};

module.exports = { connection };
