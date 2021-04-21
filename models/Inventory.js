const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  referencia: {
    type: String,
    unique: true,
    required: [true, "reference is required"]
  },
  descripcion: {
    type: String,
    unique: false,
  },
  cantidad: {
    type: Number,
    unique: false,
  }
},
{ timestamps: { createdAt: true } });

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
