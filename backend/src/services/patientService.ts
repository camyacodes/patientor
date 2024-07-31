import patientData from "../../data/patients";
import { PatientType, NonSensitivePatientInfoType } from "../types";

const patients: PatientType[] = patientData;

const getPatients = (): NonSensitivePatientInfoType[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default { getPatients };
