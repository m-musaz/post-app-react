import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import PostContainer from "./PostContainer";
import NewPost from "./NewPost";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./UserFeed.module.css";
import { useNavigate } from "react-router-dom";
import fetchData from "../../Services/FetchPostData";

function UserFeed() {
  const [posts, setPosts] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [userLoggedIn, setuserLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(setPosts, setLoading);
    try {
      setuserLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
    } catch {
      setuserLoggedIn("");
    }
  }, []);

  const handleLogout = () => {
    setuserLoggedIn("");
    localStorage.setItem("LoggedIn", "");
  };
  const handleLogin = () => {
    navigate("/auth");
  };
  const handleSignup = () => {
    navigate({ pathname: "/auth", search: "?signout=true" });
  };

  const removePost = (postTitle) => {
    setPosts(posts.filter((post) => post.title != postTitle));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <nav className="navbar bg-dark">
            <form className="container-fluid justify-content-start px-5">
              <a className="navbar-brand text-white fw-bold" href="#">
                <img
                  src="https://i.ibb.co/3T3WzfZ/Threads-White-Icon-Logo-Vector.png"
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top mx-2"
                />
                Threads
              </a>
              {userLoggedIn ? (
                userLoggedIn.id ? (
                  <button
                    className={`btn btn-outline-light me-2 px-4 ${styles.logoutbtn}`}
                    type="button"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <button
                      className={`btn btn-outline-light me-2 px-4 ${styles.loginbtn}`}
                      type="button"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-outline-light me-2 px-3"
                      type="button"
                      onClick={handleSignup}
                    >
                      Sign Up
                    </button>
                  </>
                )
              ) : (
                <>
                  <button
                    className={`btn btn-outline-light me-2 px-4 ${styles.loginbtn}`}
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-light me-2 px-3"
                    type="button"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </form>
          </nav>
        </div>
      </div>
      <div className={`container-fluid  ${styles.outercontainer}`}>
        <div className="row ">
          <div className={`col-12 ${styles.innercontainer}`}>
            {userLoggedIn ? (
              userLoggedIn.id ? (
                <>
                  <div className="text-center mt-3">
                    <h1 className="display-3">
                      Welcome Back {userLoggedIn.name}
                    </h1>
                    <h5 className="display-5">User : {userLoggedIn.id}</h5>
                  </div>
                  <NewPost userId={userLoggedIn} />
                </>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
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
                    userId={`${post?.userId}`}
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
