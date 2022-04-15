import { Router } from "express";
import UserRoutes from "./user.route.js";
import QuoteRoutes from "./quote.route.js";

const APIRoutes = Router();
APIRoutes.use("/user", UserRoutes);
APIRoutes.use("/quotes", QuoteRoutes);

export { APIRoutes };
