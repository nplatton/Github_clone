import { default as Form } from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  let getUserInfoMock;
  beforeEach(() => {
    getUserInfoMock = jest.fn();
    render(<Form getUserInfo={getUserInfoMock} />);
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("it calls on getUserInfo prop on submission", () => {
    let userInput = screen.getByLabelText("username");
    userEvent.type(userInput, "test user{enter}");
    expect(getUserInfoMock).toHaveBeenCalledWith("test user");
  });
});
