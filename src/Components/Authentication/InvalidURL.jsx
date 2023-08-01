import React from "react";
import { RotatingLines } from "react-loader-spinner";

function InvalidURL() {
  return (
    <div className="containter-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvalidURL;
