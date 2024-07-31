import express from "express";
const router = express.Router();
import diagnosesService from "../services/diagnosesService";

router.get("/", (_req, res) => {
  const results = diagnosesService.getDiagnoses();
  res.json(results);
});

export default router;
