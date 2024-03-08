import { Team } from "../types";

export const getTeams = async (
  page: number,
  rowsPerPage: number
): Promise<Team[]> => {
  console.log(`Fetching teams, page: ${page}, rowsPerPage: ${rowsPerPage}`);
  const skip = page * rowsPerPage;
  const take = rowsPerPage;
  const response = await fetch(
    `http://localhost:3173/team?skip=${skip}&take=${take}`
  );
  return await response.json();
};

export const getCount = async (): Promise<number> => {
  const response = await fetch(`http://localhost:3173/team/count`);
  return await response.json();
};
