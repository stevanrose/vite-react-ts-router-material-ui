import { FC } from "react";
import { Typography } from "@mui/material";

const About: FC = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        About Page
      </Typography>
    </div>
  );
};

export default About;
