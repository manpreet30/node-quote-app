import UserModel from "../models/users.model.js";
import jwt from "jsonwebtoken";
import { getCurrentUserId } from "../helpers/user.helper.js";

const list = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const profile = async (req, res) => {
  try {
    const user = await UserModel.findById(getCurrentUserId(req.headers));

    if (!user) throw "invalid user";
    res.json(user);
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    const data = { token: null, message: "", user: null };

    if (!user || user.password !== req.body.password) {
      throw { status: 422, message: "wrong email or password" };
    }

    data.token = jwt.sign({ id: user._id }, "jswSecret", { expiresIn: 60 * 60 });
    const { firstName, lastName, email } = user;
    data.user = { firstName, lastName, email };
    res.json(data);
  } catch (err) {
    res.status(err.status || 402).json(err.message);
  }
};

export { list, profile, login };
