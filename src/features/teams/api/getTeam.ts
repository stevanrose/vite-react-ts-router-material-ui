import { Team } from "../types";

export const getTeam = async (id: number): Promise<Team> => {
  const response = await fetch(`http://localhost:3173/team/${id}`);
  return await response.json();
};
