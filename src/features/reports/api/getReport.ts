import { Report } from "../types";

export const getReport = async (id: number): Promise<Report> => {
  const response = await fetch(`http://localhost:3173/reports/${id}`);
  return await response.json();
};
