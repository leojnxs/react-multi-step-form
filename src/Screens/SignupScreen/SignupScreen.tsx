import React from "react";
import { Box, Paper } from "@mui/material";

import ConfirmationForm from "./Components/ConfirmationForm";
import Notification from "../../Components/Notification";
import NotificationProvider from "../../Components/NotificationProvider";
import RegisterForm from "./Components/RegisterForm";
import StepItem from "../../Components/StepItem";
import Stepper from "../../Components/Stepper";
import StepperProvider from "../../Components/StepperProvider";
import TermsView from "./Components/TermsForm";

const SignupScreen: React.FunctionComponent = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <NotificationProvider>
        <StepperProvider steps={3}>
          <Paper square={false}>
            <Stepper />
            <StepItem step={0} component={<TermsView />} title='By continuing you accept our Terms of Service' />
            <StepItem step={1} component={<RegisterForm />} title="Let's set up your account" />
            <StepItem step={2} component={<ConfirmationForm />} title='Confirm your otp' />
          </Paper>
        </StepperProvider>
        <Notification />
      </NotificationProvider>
    </Box>
  );

export default SignupScreen;
