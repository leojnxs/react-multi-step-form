import React from "react";
import { Box, useTheme } from "@mui/material";
import { StepperContext } from "../StepperProvider";

interface StepButtonProps {
  active: Boolean;
  visited: boolean;
  index: number;
}

const StepButton: React.FunctionComponent<StepButtonProps> = ({ active, visited, index }) => {
  const theme = useTheme();
  const { moveTo } = React.useContext(StepperContext);

  const handleClick = () => {
    if (visited && !active) {
      moveTo(index);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: theme.spacing(2.7),
        width: theme.spacing(2.7),
        ...(active ? { background: theme.palette.primary.light } : {}),
        mx: theme.spacing(1 / 2),
        ...(visited && !active ? { cursor: "pointer" } : {}),
        "&:hover": {
          ...(visited && !active ? { background: theme.palette.primary.light } : {}),
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          borderRadius: "50%",
          height: theme.spacing(1.2),
          width: theme.spacing(1.2),
          background: active || visited ? theme.palette.primary.main : theme.palette.action.disabled,
        }}
      ></Box>
    </Box>
  );
};

export default StepButton;
