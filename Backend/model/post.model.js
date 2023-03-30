const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  ratings: { type: Numbers, required: true },
  categories: { type: Array, required: true },
  image: { type: URL, required: true },
});

const postModel = mongoose.model("movies", postSchema);
