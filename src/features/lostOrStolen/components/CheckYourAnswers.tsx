import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { FormData } from "../types";
import dayjs from "dayjs";

const formatDate = (year: string, month: string, day: string) => {
  return new Date(parseInt(year), parseInt(month), parseInt(day));
};

const CheckYourAnswers: FC = () => {
  const location = useLocation();
  const [formData] = useState<FormData>(location.state.formData);

  const { yearOfBirth, monthOfBirth, dayOfBirth } = formData.details;
  const dateOfBirth = formatDate(yearOfBirth, monthOfBirth, dayOfBirth);

  const { yearOfLoss, monthOfLoss, dayOfLoss } = formData.circumstances;
  const dateOfLoss = formatDate(yearOfLoss, monthOfLoss, dayOfLoss);

  return (
    <form>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ my: 4 }}>
            <Card sx={{ maxWidth: 900 }}>
              <CardContent>
                <Typography variant="h3" color="text.primary" mt={5} mb={2}>
                  Check your answers
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  Passport Details
                </Typography>
                <Typography variant="h5" component="div">
                  Report type
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.reportType}
                </Typography>
                <Typography variant="h5" component="div">
                  Passport number
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.details.passportNumber}
                </Typography>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.details.firstNames} {formData.details.middleNames}{" "}
                  {formData.details.lastName}
                </Typography>
                <Typography variant="h5" component="div">
                  Date of birth
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {dayjs(dateOfBirth).format("DD-MM-YYYY")}
                </Typography>

                <Typography gutterBottom variant="h4" component="div">
                  Circumstances of loss
                </Typography>
                <Typography variant="h5" component="div">
                  Lost or stolen
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.circumstances.lostOrStolen}
                </Typography>
                <Typography variant="h5" component="div">
                  Reason
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.circumstances.lostOrStolenReason}
                </Typography>
                <Typography variant="h5" component="div">
                  City or town
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.circumstances.cityOrTown}
                </Typography>
                <Typography variant="h5" component="div">
                  Country
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.circumstances.country}
                </Typography>
                <Typography variant="h5" component="div">
                  Date of loss
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {dayjs(dateOfLoss).format("DD-MM-YYYY")}
                </Typography>

                <Typography gutterBottom variant="h4" component="div">
                  Contact details
                </Typography>
                <Typography variant="h5" component="div">
                  Email address
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {formData.contactDetails.emailAddress}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CheckYourAnswers;
