import { FC } from "react";
import { Typography } from "@mui/material";

const Error: FC = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Error Page
      </Typography>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Sorry, an unexpected error has occurred.
      </Typography>
    </div>
  );
};

export default Error;
