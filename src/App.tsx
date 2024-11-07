import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router";

const App: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
    </Box>
  );
};

export default App;
