import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonalInfo from "./PersonalInformation/PersonalInfo";
import ProfessionalInfo from "./ProfessionalInformation/ProfessionalInfo";
import Review from "./ReviewResume/Review";
// Copyright Function outside of Resume component scope for copyright text in bottom
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Chronicles Resume Builder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
// Steps Array for mapping three steps: 1- Personal Info component. 2- Professional Info Component 3- Review Resume Component. This will increase user interactivity and add a good user experience taking information from user in steps.
const steps = [
  "Personal Information",
  "Professional Information",
  "Review your resume",
];

// The function to conditionally render all of three components step by step.
function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <ProfessionalInfo />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const Resume = () => {
  //  the state to manage going to next step or coming back to the previous step
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar style={{ textAlign: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6" color="inherit" noWrap>
              Chronicles Resume Builder
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          data-testid="review-your-resume"
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Review your Resume
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <></>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
          {/* )} */}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
