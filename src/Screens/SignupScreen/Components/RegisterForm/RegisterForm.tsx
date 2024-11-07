import React from "react";
import * as yup from "yup";
import { Box, Button, Divider, useTheme } from "@mui/material";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";

import FormTextField from "../../../../Components/FormTextField";
import { NotificationContext } from "../../../../Components/NotificationProvider";
import { NotificationTypeKeys } from "../../../../Hooks/useNotificationContext";
import { StepperContext } from "../../../../Components/StepperProvider";
import { useAuthentication } from "../../../../Hooks";

interface FormValues {
  firstname: string;
  email: string;
  lastname: string;
  password: string;
}

const validationSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  lastname: yup.string().required("Last name is required"),
  password: yup.string().min(6, "Password has to be longer than 6 characters!").required("Password is required!"),
});

const RegisterForm: React.FunctionComponent = () => {
  const theme = useTheme();
  const { moveBack, moveNext } = React.useContext(StepperContext);
  const { showNotification } = React.useContext(NotificationContext);
  const { signup } = useAuthentication();

  const initialValues: FormValues = React.useMemo(
    () => ({
      firstname: "",
      email: "",
      lastname: "",
      password: "",
    }),
    []
  );

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    await signup({ ...values })
      .then((challengeToken) => {
        moveNext({ ...values, challengeToken });
      })
      .catch((err) => {
        showNotification(
          NotificationTypeKeys.Error,
          err?.message || "Sorry! Something went wrong, could you, please, try again?"
        );
      });

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }: FormikProps<FormValues>) => (
        <Form>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 4,
              margin: theme.spacing(4),
              [theme.breakpoints.up("md")]: {
                minWidth: theme.spacing(72),
              },
            }}
          >
            <FormTextField name='firstname' placeholder='E.g. John' label='First name' autoFocus />
            <FormTextField name='email' placeholder='E.g. john.smith@example.com' label='Email' />
            <FormTextField name='lastname' placeholder='E.g. Smith' label='Last name' />
            <FormTextField name='password' label='Password' type='password' />
          </Box>
          <Divider />
          <Box sx={{ padding: theme.spacing(3, 4), display: "flex", justifyContent: "space-between" }}>
            <Button color='secondary' type='button' variant='outlined' onClick={() => moveBack()}>
              Back
            </Button>
            <Button color='primary' type='submit' variant='contained' disabled={isSubmitting}>
              Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
