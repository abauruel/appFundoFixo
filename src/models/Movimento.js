const mongoose = require("mongoose");

const MovimentoSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  despesa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Despesas",
    required: true
  },
  modal: { type: mongoose.Schema.Types.ObjectId, ref: "Modal", required: true },
  origem: { type: String },
  destino: { type: String },
  descricao: { type: String },
  valor: { type: Number },
  data: { type: Date },
  NF: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  LastUpdated: { type: String },
  status: { type: String, default: "Registrado" },
  latestStatus: { type: Date }
});

module.exports = mongoose.model("Movimento", MovimentoSchema);
