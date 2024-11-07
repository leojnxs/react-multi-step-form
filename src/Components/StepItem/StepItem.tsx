import React from "react";
import { StepperContext } from "../StepperProvider";
import { Typography, useTheme } from "@mui/material";

interface StepItemProps {
  component: React.ReactNode;
  step: number;
  title: string;
}

const StepItem: React.FunctionComponent<StepItemProps> = ({ component, step, title }) => {
  const { currentStep } = React.useContext(StepperContext);
  const theme = useTheme();

  if (currentStep !== step) return null;

  return (
    <React.Fragment>
      <Typography color='secondary' variant='h6' sx={{ m: theme.spacing(2, 4) }}>
        {title}
      </Typography>
      {component}
    </React.Fragment>
  );
};

export default StepItem;
