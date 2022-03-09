import axios from "axios";

const loading = (username) => ({
  type: "LOADING",
  payload: username,
});

const loadResult = (data) => ({
  type: "LOAD_RESULT",
  payload: data, // -----------------------------------
});

export const getUserInfo = (username) => {
  return async (dispatch) => {
    dispatch(loading(username));
    try {
      const allInfo = await getRepos(username);
      // Maybe extract necessary info here?
      const neededInfo = extractData(allInfo);
      dispatch(loadResult(neededInfo));
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

function extractData(info) {
  return info.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    isOriginalRepo: !repo.fork,
    forks: repo.forks,
    watchers: repo.watchers_count,
    stargazers: repo.stargazers_count,
    createdAt: {
      date: repo.created_at.split("T")[0],
      time: repo.created_at.split(/[TZ]/)[1],
    },
    lastUpdated: {
      date: repo.pushed_at.split("T")[0],
      time: repo.pushed_at.split(/[TZ]/)[1],
    },
    license: repo.license.spdx_id,
    language: repo.language,
  }));
}
