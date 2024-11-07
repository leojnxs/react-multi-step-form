import React from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

import { StepperContext } from "../../../../Components/StepperProvider";

const TermsForm: React.FunctionComponent = () => {
  const theme = useTheme();
  const { moveNext } = React.useContext(StepperContext);

  return (
    <React.Fragment>
      <Box sx={{ padding: theme.spacing(1, 4), maxWidth: theme.spacing(80) }}>
        <Typography color="secondary" variant='body2' sx={{ mb: theme.spacing(3) }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sem gravida, aliquam augue vel, venenatis
          libero. Cras vulputate ipsum vitae ligula eleifend, quis luctus velit pulvinar. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Morbi tristique, sem euismod imperdiet tempor, leo risus tincidunt mi,
          ultricies finibus quam ante eget erat. Nunc viverra nisi et vestibulum fermentum. Aliquam sed nisl laoreet
          urna imperdiet facilisis. Nunc interdum efficitur turpis, ac sodales magna malesuada vel. Nulla vehicula, diam
          vitae pellentesque euismod, dolor nisl lobortis tellus, a malesuada magna erat id nisl. Curabitur vitae metus
          consequat, feugiat enim quis, congue eros.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ padding: theme.spacing(3, 4), display: "flex", justifyContent: "flex-end" }}>
        <Button
          color='primary'
          type='button'
          variant='contained'
          autoFocus
          onClick={() => moveNext()}
        >
          Continue
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default TermsForm;
