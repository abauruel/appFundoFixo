const Modal = require("../models/Modal");

class ModalController {
  async store(req, res) {
    const { modal } = req.body;

    const modal = await Modal.create(req.body);

    return res.json(modal);
  }
}

module.exports = new ModalController();
