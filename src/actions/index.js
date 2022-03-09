import axios from "axios";

export const getUserInfo = (username) => {
  return async (dispatch) => {
    dispatch(loading(username));
    try {
      const info = await getRepos(username);
      // Do stuff
      // Maybe extract necessary info here?
    } catch (err) {
      console.warn(err);
      dispatch({
        type: "ERR",
        payload: err.message,
      });
    }
  };
};

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/users/${username}/repos`
    );
    if (data.status === 404) {
      throw new Error("No user with given username!");
    }
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}