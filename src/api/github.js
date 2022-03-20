import axios from "axios";

async function apiGithub(endpoint) {
  let data = [];
  try {
    await axios
      .get(`https://api.github.com/users/henriquensco/${endpoint}`)
      .then((res) => {
        data = res.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (err) {
    console.log(err);
  }

  return data;
}

function apiRepositories() {
  let repositories = apiGithub("repos");

  return repositories;
}

export { apiRepositories, apiGithub };
