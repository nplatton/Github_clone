import { screen, render } from "@testing-library/react";

import { default as RepoBar } from ".";

describe("RepoBar", () => {
  test("it renders a repo bar", () => {
    const mockData = {
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
    };
    render(<RepoBar data={mockData} />);
    const bar = screen.getByTestId("repo-bar");
    expect(bar).toBeInTheDocument();
  });
});
