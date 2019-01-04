const express = require("express");
const routes = express.Router();

const authMiddleware = require("./middlewares/auth");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.get("/teste", authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
