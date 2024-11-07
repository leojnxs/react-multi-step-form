import { Box, BoxProps, Button, Paper, Typography, styled, useTheme } from "@mui/material";

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

const Content = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(2),
}));

const SignupCompleteScreen: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <Section
          sx={{
            textAlign: "center",
            [theme.breakpoints.up("md")]: {
              textAlign: "left",
              maxWidth: theme.spacing(53),
            },
            [theme.breakpoints.up("lg")]: {
              maxWidth: theme.spacing(60),
            },
          }}
        >
          <Typography color='secondary' variant='h3' sx={{ mb: theme.spacing(5) }}>
            Congratulations! Your Account is Ready
          </Typography>
        </Section>
        <Section
          sx={{
            [theme.breakpoints.up("md")]: {
              maxWidth: theme.spacing(60),
            },
          }}
        >
          <Paper square={false} sx={{ padding: theme.spacing(4), textAlign: "center" }}>
            <Typography color='secondary' variant='h6' sx={{ mb: theme.spacing(2) }}>
              Thank you for joining
            </Typography>
            <Typography color='secondary' variant='body1' sx={{ mb: theme.spacing(2) }}>
              You're ready to jump into an amazing journey with us.
            </Typography>
            <Button
              color='primary'
              variant='contained'
              fullWidth
              onClick={() => window.open("http://www.google.com", "_blank")}
            >
              Get started
            </Button>
          </Paper>
        </Section>
      </Content>
    </Container>
  );
};

export default SignupCompleteScreen;
