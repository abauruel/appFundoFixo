const mongoose = require("mongoose");

const DespesaSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model("Despesa", DespesaSchema);
