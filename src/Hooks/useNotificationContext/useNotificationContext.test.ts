import { renderHook, act } from "@testing-library/react";
import useNotificationContext, { NotificationTypeKeys } from "./useNotificationContext";

// testing notification when fired
test("should fire a notification", () => {
  const { result } = renderHook(() => useNotificationContext());

  act(() => {
    result.current.showNotification(NotificationTypeKeys.Error, "Something went wrong");
  });

  expect(result.current.type).toBe(NotificationTypeKeys.Error);
  expect(result.current.message).toBe("Something went wrong");

  act(() => {
    result.current.showNotification(NotificationTypeKeys.Success, "User Authenticated successfuly");
  });

  expect(result.current.type).toBe(NotificationTypeKeys.Success);
  expect(result.current.message).toBe("User Authenticated successfuly");
});

// testing notification when message clear
test("should clear message", () => {
  const { result } = renderHook(() => useNotificationContext());

  act(() => {
    result.current.message = "teste";
  });

  act(() => {
    result.current.clearMessage();
  });

  expect(result.current.message).toBe("");
});
