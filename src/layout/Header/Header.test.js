import { screen } from "@testing-library/react";

import { default as Header } from ".";

describe("Header", () => {
  test("it renders welcome when no user searched", () => {
    renderWithReduxProvider(<Header />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header.textContent).toMatch(/welcome/i);
  });

  test("it renders user specific heading when user is searched", () => {
    const initialState = {
      username: "tester",
    };
    renderWithReduxProvider(<Header />, { initialState });
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header.textContent).toMatch(/tester/i);
  });
});
