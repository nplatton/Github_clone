import React from "react";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "thunk";
import thunk from "redux-thunk";

import searchReducer from "../reducers/searchReducer";

const TestProviders = ({ initState }) => {
  initState ||= {
    location: "",
    result: { sunrise: "", sunset: "" },
    loading: false,
  };
  let testReducer = () => searchReducer(initState, { type: "@@INIT" });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({
  data: [
    {
      name: "test_repo",
      url: "test_repo@test.com",
      isOriginalRepo: !false,
      forks: 3,
      watchers: 2,
      stargazers: 0,
      createdAt: {
        date: "2022-01-23",
        time: "11:20:20",
      },
      lastUpdated: {
        date: "2022-01-25",
        time: "13:34:20",
      },
      license: "MIT",
      language: "JavaScript",
    },
  ],
});

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
