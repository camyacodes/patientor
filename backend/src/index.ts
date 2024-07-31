import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

import diagnosesRouter from "../src/routes/diagnoses";
import patientRouter from "../src/routes/patients";

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);

app.listen(PORT, () => {
  console.log(`Server now running on ${PORT}`);
});
