import React, { useContext, useEffect } from "react";
import axios from "axios";
import PostContainer from "./PostContainer";
import NewPost from "./NewPost";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./UserFeed.module.css";
import { useNavigate } from "react-router-dom";

function UserFeed() {
  const [posts, setPosts] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [userLoggedIn, setuserLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(res?.data);
        res !== null ? setLoading(false) : undefined;
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    setuserLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
  }, []);

  // useEffect(() => {
  //   setuserLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
  // }, [userLoggedIn]);

  const removePost = (posttitle) => {
    setPosts(posts.filter((post) => post.title != posttitle));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start px-5">
              <a className="navbar-brand" href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Threads_%28app%29_logo.svg"
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Threads
              </a>
              {userLoggedIn == "" ? (
                <>
                  <button
                    className="btn btn-primary me-2 px-4"
                    style={{ marginLeft: "70%" }}
                    type="button"
                    onClick={() => navigate("/auth")}
                  >
                    Login
                  </button>
                  <button className="btn btn-primary me-2 px-3" type="button">
                    Sign Up
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary me-2 px-4"
                  style={{ marginLeft: "80%" }}
                  type="button"
                  onClick={() => {
                    setuserLoggedIn("");
                    localStorage.setItem("LoggedIn", "");
                  }}
                >
                  Log Out
                </button>
              )}
            </form>
          </nav>
        </div>
      </div>
      <div className={`container-fluid ${styles.outercontainer}`}>
        <div className="row">
          <div className={`col-12 ${styles.innercontainer}`}>
            {userLoggedIn !== "" ? (
              <NewPost userId={userLoggedIn} />
            ) : undefined}
            <div className="row">
              {Loading ? (
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              ) : (
                posts?.map((post) => (
                  <PostContainer
                    title={post?.title}
                    body={post?.body}
                    postId={post?.id}
                    userId={post?.userId}
                    key={post?.id}
                    userloggedIn={userLoggedIn}
                    removePost={removePost}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFeed;
