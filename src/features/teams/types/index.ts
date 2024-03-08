import { Dispatch, SetStateAction } from "react";

export type Team = {
  id: number;
  slug: string;
  name: string;
  description: string;
};

export interface CreateTeamDto {
  name: string;
  description: string;
}

export interface TeamsListProps {
  data: Team[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  count: number;
}
