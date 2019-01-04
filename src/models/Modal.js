const mongoose = require("mongoose");

const ModalSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model("Modal", ModalSchema);
