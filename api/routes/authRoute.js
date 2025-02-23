import express from "express";
import {
  google,
  signin,
  signout,
  signup,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
// google route
router.post("/google", google);
router.get("/signout", signout);

export default router;
