const Despesa = require("../models/Despesa");

class Despesa {
  async store(req, res) {
    const { name } = req.body;

    const despesa = Despesa.create(red.body);
  }
}

module.exports = new Despesa();
