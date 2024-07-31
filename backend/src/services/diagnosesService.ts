import diagnosisData from "../../data/diagnoses";
import { DiagnosisType } from "../types";

const diagnoses: DiagnosisType[] = diagnosisData;

const getDiagnoses = (): DiagnosisType[] => {
  return diagnoses;
};

export default { getDiagnoses };
