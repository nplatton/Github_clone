import { screen, render } from "@testing-library/react";

import { default as Result } from ".";

describe("Result component", () => {
  test("it renders all a single result", () => {
    const mockUser = "tester";
    const mockResult = [
      {
        name: "test_repository",
        url: "test_repo@test.com",
        isOriginalRepo: true,
        forks: 69,
        watchers: 6,
        stargazers: 9,
        createdAt: {
          date: "2022-01-23",
          time: "12:23:40",
        },
        lastUpdated: {
          date: "2022-01-25",
          time: "09:40:02",
        },
        language: "JavaScript",
      },
    ];
    render(<Result username={mockUser} result={mockResult} />);
    const container = screen.getByRole("region");
    expect(container.childNodes).toHaveLength(1);
  });

  test("it renders multiple results", () => {
    const mockUser = "tester";
    const mockResult = [
      {
        name: "test_repository",
        url: "test_repo@test.com",
        isOriginalRepo: true,
        forks: 69,
        watchers: 6,
        stargazers: 9,
        createdAt: {
          date: "2022-01-23",
          time: "12:23:40",
        },
        lastUpdated: {
          date: "2022-01-25",
          time: "09:40:02",
        },
        language: "JavaScript",
      },
      {
        name: "test_repository2",
        url: "test_repo@test.com",
        isOriginalRepo: true,
        forks: 69,
        watchers: 6,
        stargazers: 9,
        createdAt: {
          date: "2022-01-23",
          time: "12:23:40",
        },
        lastUpdated: {
          date: "2022-01-25",
          time: "09:40:02",
        },
        language: "JavaScript",
      },
      {
        name: "test_repository3",
        url: "test_repo@test.com",
        isOriginalRepo: true,
        forks: 69,
        watchers: 6,
        stargazers: 9,
        createdAt: {
          date: "2022-01-23",
          time: "12:23:40",
        },
        lastUpdated: {
          date: "2022-01-25",
          time: "09:40:02",
        },
        language: "JavaScript",
      },
    ];
    render(<Result username={mockUser} result={mockResult} />);
    const container = screen.getByRole("region");
    expect(container.childNodes).toHaveLength(3);
  });
});
