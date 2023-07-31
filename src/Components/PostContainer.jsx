import React from "react";
import UserComment from "./Comment";

function PostContainer() {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Comments
        </a>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <div className="card">
              <div className="card-body">
                <form>
                  <input
                    className="form-control"
                    placeholder="Write a comment"
                  ></input>
                  <button className="btn btn-primary">Post</button>
                </form>
              </div>
            </div>
            <UserComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
