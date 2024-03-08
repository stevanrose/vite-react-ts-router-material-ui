import { JSONValue } from "../../types";
import { Dispatch, SetStateAction } from "react";

export type Report = {
  id: number;
  reference: string;
  businessKey: string;
  forenames: string;
  surname: string;
  dateOfBirth: Date;
  countryOfLoss: string;
  status: string;
  reportType: string;
  workStream: string;
  metaData: JSONValue;
  reportData: JSONValue;
};

export type CreateReportData = {
  businessKey: string;
  reference: string;
  forenames: string;
  surname: string;
  dateOfBirth: Date;
  countryOfLoss: string;
  status: string;
  reportType: string;
  workStream: string;
  metaData: JSONValue;
  reportData: JSONValue;
};

export interface ReportsListProps {
  reports: Report[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  count: number;
}
