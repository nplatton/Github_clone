const initialState = {
  username: "",
  result: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        username: action.payload,
        loading: true,
      };
    case "LOAD_RESULT":
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false,
      };
    case "ERR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
