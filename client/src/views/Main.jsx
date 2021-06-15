import React, { useState } from "react";
import axios from "axios";
import { Link, Router } from "@reach/router";
import ViewArt from "./ViewArt";

const Main = (props) => {
  const {articles, setArticles} = props;
  const [searchQ, setSearchQ] = useState("");
  const [lodaed, setLoaded] = useState(false);
  const apiToken = "dcf7da283849fb8a15da3a8d83fcb8a6";

  const handelSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://gnews.io/api/v4/search?q=${searchQ}&token=${apiToken}`)
      .then((res) => {
        setArticles(res.data.articles);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handelSearch}>
        <input type="text" onChange={(e) => setSearchQ(e.target.value)}></input>
        <button>Search</button>
      </form>
      {lodaed &&
        articles.map((art, idx) => {
          return (
            <div key={idx}>
              <div style={{ border: "1px solid black" }}>
                <p>Title: {art.title}</p>
                <p>Description: {art.description}</p>
                <Link to={`/view/${idx}`}>View Details</Link>
              </div>
            </div>
          );
        })}
      <div>
       
      </div>
    </div>
  );
};

export default Main;
