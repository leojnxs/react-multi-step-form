import React from "react";
import useNotificationContext, { NotificationContextState, NotificationTypeKeys } from "../../Hooks/useNotificationContext";

export const NotificationContext = React.createContext<NotificationContextState>({
  message: '',
  type: NotificationTypeKeys.Success,
  showNotification: () => {},
  clearMessage: () => {},
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider: React.FunctionComponent<NotificationProviderProps> = ({ children }) => {
  const contextValue = useNotificationContext();

  return <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>;
};

export default NotificationProvider;
