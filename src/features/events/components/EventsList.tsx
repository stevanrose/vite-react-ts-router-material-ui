import { FC } from "react";
import { Event } from "../types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface EventListProps {
  events: Event[];
}

const EventsList: FC<EventListProps> = (props): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Business Key</TableCell>
            <TableCell>User id</TableCell>
            <TableCell>Service name</TableCell>
            <TableCell>Report id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.events.map((event) => (
            <TableRow
              key={event.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {event.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {event.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {event.businessKey}
              </TableCell>
              <TableCell component="th" scope="row">
                {event.userId}
              </TableCell>
              <TableCell component="th" scope="row">
                {event.serviceName}
              </TableCell>
              <TableCell component="th" scope="row">
                {event.reportId}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsList;
