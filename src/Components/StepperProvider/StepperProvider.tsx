import React from "react";
import useStepperContext, { StepperContextState } from "../../Hooks/useStepperContext";

export const StepperContext = React.createContext<StepperContextState>({
  currentStep: 0,
  moveBack: () => {},
  moveNext: (data?: Record<string, string>) => {},
  moveTo: (index: number) => {},
  steps: 0,
});

interface StepperProviderProps {
  children: React.ReactNode;
  steps: number;
}
const StepperProvider: React.FunctionComponent<StepperProviderProps> = ({ children, steps }) => {
  const contextValue = useStepperContext(steps);

  return <StepperContext.Provider value={contextValue}>{children}</StepperContext.Provider>;
};

export default StepperProvider;
