const express = require("express");
const routes = express.Router();

const authMiddleware = require("./middlewares/auth");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const DespesaController = require("./controllers/DespesaController");
const ModalController = require("./controllers/ModalController");
const MovimentoController = require("./controllers/MovimentoController");

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/despesa", DespesaController.store);
routes.post("/modal", ModalController.stores);

routes.get("/teste", authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
