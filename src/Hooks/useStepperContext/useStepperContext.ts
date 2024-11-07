import React from "react";

interface StepperContext {
  currentStep: number;
  data?: Record<string, string>;
  steps: number;
}

export interface StepperContextState {
  currentStep: number;
  data?: Record<string, string>;
  steps: number;
  moveBack: () => void;
  moveNext: (data?: Record<string, string>) => void;
  moveTo: (index: number) => void;
}

const useStepperContext = (steps: number) => {
  const initialValue: StepperContext = {
    currentStep: 0,
    steps,
  };
  const [contextState, setContextState] = React.useReducer(
    (prevState: StepperContext, state: Partial<StepperContext>) => ({ ...prevState, ...state }),
    initialValue
  );

  const moveBack = React.useCallback(() => {
    setContextState({ currentStep: contextState.currentStep - 1 });
  }, [contextState]);

  const moveTo = React.useCallback((index: number) => {
    setContextState({ currentStep: index });
  }, []);

  const moveNext = React.useCallback(
    (data?: Record<string, string>) => {
      setContextState({ currentStep: contextState.currentStep + 1, data });
    },
    [contextState]
  );

  const contextValue: StepperContextState = React.useMemo(
    () => ({
      ...contextState,
      moveBack,
      moveNext,
      moveTo,
    }),
    [contextState, moveBack, moveNext, moveTo]
  );

  return contextValue;
};

export default useStepperContext;
