import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Birds home page");
});

export default router;
