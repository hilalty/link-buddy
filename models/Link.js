const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  visited: { type: Number, default: 0 },
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;