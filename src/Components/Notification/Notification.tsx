import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { NotificationContext } from "../NotificationProvider";

const Notification: React.FunctionComponent = () => {
  const { type, message, clearMessage } = React.useContext(NotificationContext);

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={clearMessage}
    >
      <Alert onClose={clearMessage} severity={type} variant='filled' sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
