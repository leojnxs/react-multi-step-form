import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import StepButton from "../StepButton";
import { StepperContext } from "../StepperProvider";

const Stepper: React.FunctionComponent = () => {
  const theme = useTheme();
  const { currentStep, steps } = React.useContext(StepperContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", padding: theme.spacing(4), pb: theme.spacing(2) }}>
      <Typography
        color='secondary'
        variant='body2'
        sx={{ mr: theme.spacing(3), lineHeight: "21px", fontWeight: theme.typography.fontWeightMedium }}
      >
        Step {currentStep + 1} of {steps}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {Array.from(Array(steps), (e, index) => {
          return <StepButton index={index} key={index} active={currentStep === index} visited={currentStep >= index} />;
        })}
      </Box>
    </Box>
  );
};

export default Stepper;
