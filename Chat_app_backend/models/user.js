const mongoose = require("mongoose");
const { body, validationResult } = require('express-validator');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
