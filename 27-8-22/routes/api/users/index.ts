import { Router } from "express";
import { userController } from "../../../controllers/user";

const router = Router();
router.get("/", userController.get);
router.post("/", userController.post);

export default router;
