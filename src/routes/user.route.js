import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { list, profile, login } from "../controllers/users.controller.js";

const router = Router();

router.get("/list", isAuthenticated, list);
router.get("/profile", isAuthenticated, profile);
router.post("/login", login);

export default router;
