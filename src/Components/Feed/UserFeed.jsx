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
    try {
      setuserLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
    } catch {
      setuserLoggedIn("");
    }
  }, []);

  const removePost = (posttitle) => {
    setPosts(posts.filter((post) => post.title != posttitle));
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
                    className="btn btn-outline-light me-2 px-4"
                    style={{ marginLeft: "75%" }}
                    type="button"
                    onClick={() => {
                      setuserLoggedIn("");
                      localStorage.setItem("LoggedIn", "");
                    }}
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-outline-light me-2 px-4"
                      style={{ marginLeft: "70%" }}
                      type="button"
                      onClick={() => navigate("/auth")}
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-outline-light me-2 px-3"
                      type="button"
                      onClick={() =>
                        navigate({ pathname: "/auth", search: "?signout=true" })
                      }
                    >
                      Sign Up
                    </button>
                  </>
                )
              ) : (
                <>
                  <button
                    className="btn btn-outline-light me-2 px-4"
                    style={{ marginLeft: "70%" }}
                    type="button"
                    onClick={() => navigate("/auth")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-light me-2 px-3"
                    type="button"
                    onClick={() =>
                      navigate({ pathname: "/auth", search: "?signout=true" })
                    }
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
              ) : undefined
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
