import jwt from "jsonwebtoken";
import { getToken } from "../helpers/user.helper.js";

const isAuthenticated = (req, res, next) => {
  try {
    const token = getToken(req.headers);
    jwt.verify(token, "jswSecret");

    next();
  } catch (error) {
    res.status(402).json("wrong token");
  }
};

export { isAuthenticated };
