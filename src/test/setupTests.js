import React from "react";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
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
      html_url: "test_repo@test.com",
      fork: false,
      forks_count: 3,
      watchers_count: 2,
      stargazers_count: 0,
      created_at: "2022-01-23T11:20:20Z",
      pushed_at: "2022-01-25T13:34:20Z",
      license: {
        spdx_id: "MIT",
      },
      language: "JavaScript",
    },
  ],
});

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
