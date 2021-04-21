const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replacementSchema = new Schema({
  referencia: {
    type: String,
    unique: true
  },
  replacement1: {
    type: String,
    unique: false,
  },
  replacement2: {
    type: String,
    unique: false,
  }
});

const Replacement = mongoose.model("Replacement", replacementSchema);

module.exports = Replacement;
