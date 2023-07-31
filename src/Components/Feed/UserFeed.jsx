import React, { useEffect } from "react";
import axios from "axios";
import PostContainer from "./PostContainer";
import { useState } from "react";
function UserFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(res?.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="containter-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            {posts?.map((post) => (
              <PostContainer
                title={post?.title}
                body={post?.body}
                postId={post?.id}
                userId={post?.userId}
                key={post?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeed;
