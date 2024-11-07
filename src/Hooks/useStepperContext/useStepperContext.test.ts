import { renderHook, act } from "@testing-library/react";
import useStepperContext from "./useStepperContext";

// testing step when increment
test("should increment step", () => {
  const { result } = renderHook(() => useStepperContext(3));

  act(() => {
    result.current.moveNext();
  });

  expect(result.current.currentStep).toBe(1);
});

// testing step when decrement
test("should decrement step", () => {
  const { result } = renderHook(() => useStepperContext(3));

  act(() => {
    result.current.moveBack();
  });

  expect(result.current.currentStep).toBe(-1);
});