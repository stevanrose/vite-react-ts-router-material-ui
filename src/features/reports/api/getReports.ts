import { Report } from "../types";

export const getReports = async (
  page: number,
  rowsPerPage: number
): Promise<Report[]> => {
  console.log(`Fetching report page: ${page}, rowsPerPage: ${rowsPerPage}`);
  const skip = page * rowsPerPage;
  const take = rowsPerPage;
  const response = await fetch(
    `http://localhost:3173/reports?skip=${skip}&take=${take}`
  );
  return await response.json();
};

export const getCount = async (): Promise<number> => {
  const response = await fetch(`http://localhost:3173/reports/count`);
  return await response.json();
};
