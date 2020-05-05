import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

function GithubInfo() {
  const [userInfo, serUserInfo] = useState({});

  const getData = () => {
    axios
      .get("https://api.github.com/users/MLucky518")

      .then((res) => {
        console.log(res);
        serUserInfo(res.data);
        axios
          .get("https://api.github.com/users/MLucky518/repos")

          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("repo error");
          });
      })

      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userInfo);

  return (
    <div className = "github-container">
      <h1>My GithubInfo</h1>
      <img src={userInfo.avatar_url}></img>
      <h1>{userInfo.login}</h1>
      <GitHubCalendar color="purple" username={userInfo.login} />
    </div>
  );
}

export default GithubInfo;
