import { ChangeEvent, FC, MouseEvent } from "react";
import { ReportsListProps } from "../types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  TablePagination,
} from "@mui/material";

import daysjs from "dayjs";
import { useNavigate } from "react-router-dom";

const ReportsList: FC<ReportsListProps> = (props): JSX.Element => {
  const { page, setPage } = props;
  const { rowsPerPage, setRowsPerPage } = props;
  const { count } = props;

  const navigate = useNavigate();

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log("Handling page change event...");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Handling rows per page change event... ", event.target.value);

    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">id</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Reference</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Forenames</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Surname</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Date of birth</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Country of loss</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Status</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Report type</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Workstream</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reports.map((report) => (
            <TableRow
              onClick={() => navigate(`${report.id}`)}
              key={report.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ textDecoration: "none" }}
              hover
            >
              <TableCell component="th" scope="row">
                {report.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.reference}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.forenames}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.surname}
              </TableCell>
              <TableCell component="th" scope="row">
                {daysjs(report.dateOfBirth).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.countryOfLoss}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.reportType}
              </TableCell>
              <TableCell component="th" scope="row">
                {report.workStream}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ my: 4 }} />
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ReportsList;
