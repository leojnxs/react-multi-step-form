import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";

import OTPInput from "../../../../Components/OTPInput";

import { NotificationContext } from "../../../../Components/NotificationProvider";
import { NotificationTypeKeys } from "../../../../Hooks/useNotificationContext/useNotificationContext";
import { StepperContext } from "../../../../Components/StepperProvider";
import { useAuthentication } from "../../../../Hooks";

const ConfirmationForm: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { completeSignup } = useAuthentication();
  const { data } = React.useContext(StepperContext);
  const { showNotification } = React.useContext(NotificationContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (value: string) => {
    setIsSubmitting(true);
    await completeSignup({ challengeToken: data?.challengeToken || "", otp: value })
      .then(() => {
        navigate("/ready");
      })
      .catch((err: any) => {
        showNotification(
          NotificationTypeKeys.Error,
          err?.message || "Sorry! Something went wrong, could you, please, try again?"
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Box
        sx={{
          padding: theme.spacing(3, 4),
          mb: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            minWidth: theme.spacing(52),
          },
        }}
      >
        <Typography color='secondary' variant='body1'>
          Please enter the one-time passcode sent to
        </Typography>
        <Typography color='secondary' variant='body1' sx={{ mb: 4, fontWeight: theme.typography.fontWeightBold }}>
          {data?.email}
        </Typography>
        <OTPInput length={6} onValidCode={handleSubmit} separatorInterval={3} disabled={isSubmitting} />
      </Box>
    </>
  );
};

export default ConfirmationForm;
