const express = require("express");
const userRoute = express.Router();
const userModel = require("../model/users.model");

userRoute.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(201).send(users);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRoute.post("/post", async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const users = await userModel.create({ name: name });
    console.log(users);
    res.send(users);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = { userRoute };
