import { render, screen } from "@testing-library/react";

import SignupCompleteScreen from "./SignupCompleteScreen";

test("should render get started button", () => {
  render(<SignupCompleteScreen />);

  const result = screen.getByText(/get started/i);

  expect(result).toBeInTheDocument();
});
