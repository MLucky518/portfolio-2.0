import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

function GithubInfo() {
  const [userInfo, setUserInfo] = useState({});

  const getData = () => {
    axios
      .get("https://api.github.com/users/MLucky518")

      .then((res) => {
        
        setUserInfo(res.data);
        axios
          .get("https://api.github.com/users/MLucky518/repos")

          .then((res) => {
            
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
    <div className="github-container">
      <h1>My Github</h1>
      <img src={userInfo.avatar_url}></img>
      <h1>{userInfo.login}</h1>
      <div className="calendar">
        <GitHubCalendar
          color="purple"
          username={"MLucky518"}
          blockSize={14}
          showTotalCount={true}
        />
      </div>
    </div>
  );
}

export default GithubInfo;
