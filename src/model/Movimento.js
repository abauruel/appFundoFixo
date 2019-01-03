const mongoose = require("mongoose");

const MovimentoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  despesa: { type: String, required: true },
  modal: { type: String },
  origem: { type: String },
  destino: { type: String },
  descricao: { type: String },
  valor: { type: Number },
  data: { type: Date },
  NF: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  LastUpdated: { type: String },
  status: { type: String },
  latestStatus: { type: Date }
});

module.exports = mongoose.model("Movimento", MovimentoSchema);
