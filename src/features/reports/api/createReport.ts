import { CreateReportData, Report } from "../types";

export const createReport = async (
  createReportData: CreateReportData
): Promise<Report> => {
  const response = await fetch("http://localhost:3173/reports", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createReportData),
  });
  return await response.json();
};
