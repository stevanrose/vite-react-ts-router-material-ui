import { Team } from "../types";

export const deleteTeam = async (id: number): Promise<Team> => {
  const response = await fetch(`http://localhost:3173/team/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
