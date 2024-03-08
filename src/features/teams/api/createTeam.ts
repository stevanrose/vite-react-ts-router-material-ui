import { CreateTeamDto, Team } from "../types";

export const createTeam = async (
  CreateTeamDto: CreateTeamDto
): Promise<Team> => {
  const response = await fetch("http://localhost:3173/team", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(CreateTeamDto),
  });
  return await response.json();
};
