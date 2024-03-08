import { Report } from "../../features/reports/types";

export const findAll = async (): Promise<Report[]> => {
  const response = await fetch("http://localhost:3000/reports");
  return await response.json();
};
