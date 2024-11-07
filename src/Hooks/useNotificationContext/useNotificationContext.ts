import React from "react";

export enum NotificationTypeKeys {
  Error = "error",
  Success = "success",
  Warning = "warning",
}

interface NotificationContext {
  message: string;
  type: NotificationTypeKeys;
}

export interface NotificationContextState {
  clearMessage: () => void;
  message: string;
  showNotification: (type: NotificationTypeKeys, message: string) => void;
  type: NotificationTypeKeys;
}

const useNotificationContext = () => {
  const initialValue: NotificationContext = {
    type: NotificationTypeKeys.Success,
    message: "",
  };
  const [contextState, setContextState] = React.useReducer(
    (prevState: NotificationContext, state: Partial<NotificationContext>) => ({ ...prevState, ...state }),
    initialValue
  );

  const clearMessage = React.useCallback(() => {
    setContextState({ message: '' });
  }, []);

  const showNotification = React.useCallback((type: NotificationTypeKeys, message: string) => {
    setContextState({ type, message });
  }, []);

  const contextValue: NotificationContextState = React.useMemo(
    () => ({
      ...contextState,
      clearMessage,
      showNotification,
    }),
    [contextState, clearMessage, showNotification]
  );

  return contextValue;
};

export default useNotificationContext;
