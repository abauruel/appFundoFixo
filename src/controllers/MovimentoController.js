const Movimento = require("../models/Movimento");
const Users = require("../models/User");
const Modals = require("../models/Modal");
const Despesas = require("../models/Despesa");
class MovimentoController {
  async store(req, res) {
    const { despesa, modal } = req.body;

    const despesaName = Despesas.findOne(despesa);
    const modalName = Modals.findOne(modal);
    const user = Users.findById(req.user.id);
    const movimento = Movimento.create({
      ...req.body,
      name: user,
      despesa: despesaName,
      modal: modalName
    });
  }
}
