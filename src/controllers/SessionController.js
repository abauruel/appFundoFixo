const User = require("../model/User");

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.json({ user, token: User.generateToken(user) });
  }
}

module.exports = new SessionController();
