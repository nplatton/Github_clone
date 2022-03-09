import { screen } from "@testing-library/react";

import { default as Home } from ".";

describe("Home page", () => {
  test("it renders a message on error", async () => {
    const initialState = {
      username: "tester",
      error: true,
    };
    renderWithReduxProvider(<Home />, { initialState });
    const error = screen.getByRole("alert");
    expect(error.textContent).toMatch(/there has been an error/i);
  });

  test("it renders loading message when loading", async () => {
    const initialState = {
      username: "tester",
      loading: true,
    };
    renderWithReduxProvider(<Home />, { initialState });
    const message = screen.getByText(/loading/i);
    expect(message).toBeInTheDocument();
  });
});
