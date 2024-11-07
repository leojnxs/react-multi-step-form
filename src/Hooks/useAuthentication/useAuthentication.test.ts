import { renderHook } from "@testing-library/react";
import useAuthentication from "./useAuthentication";

const mockData = { firstname: "", lastname: "", email: "", password: "" };

test("should return a challenge token", async () => {
  const { result } = renderHook(() => useAuthentication());

  return expect(() => result.current.signup(mockData)).not.toBeUndefined();
});

test("should return an error for missing challenge token", async () => {
  const { result } = renderHook(() => useAuthentication());

  return expect(() => result.current.completeSignup({ challengeToken: "", otp: "123456" })).rejects.toBeInstanceOf(Error);
});
