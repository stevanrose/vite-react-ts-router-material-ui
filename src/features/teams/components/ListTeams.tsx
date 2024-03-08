import { ChangeEvent, FC, MouseEvent } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Box,
  TablePagination,
} from "@mui/material";
import { TeamsListProps } from "../types";
import { useNavigate } from "react-router-dom";

const ListTeams: FC<TeamsListProps> = (props): JSX.Element => {
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
              <Typography variant="h6">slug</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Description</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((team) => (
            <TableRow
              onClick={() => navigate(`${team.id}`)}
              key={team.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ textDecoration: "none" }}
              hover
            >
              <TableCell component="th" scope="row">
                {team.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {team.slug}
              </TableCell>

              <TableCell component="th" scope="row">
                {team.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {team.description}
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

export default ListTeams;
