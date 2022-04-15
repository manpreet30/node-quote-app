import { Router } from "express";
import { destroy, list, show, store, update } from "../controllers/quotes.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id", isAuthenticated, show);
router.get("/", isAuthenticated, list);
router.post("/", isAuthenticated, store);
router.put("/:id", isAuthenticated, update);
router.delete("/:id", isAuthenticated, destroy);

export default router;
