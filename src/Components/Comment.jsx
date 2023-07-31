import React from "react";

function UserComment() {
  return (
    <div className="card">
      <div className="card-header">M.Musa Zulfiqar</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p style={{ whiteSpace: "pre-wrap" }}>
            illum et alias quidem magni voluptatum\nab soluta ea qui saepe
            corrupti hic et \n cum repellat esse \n est sint vel veritatis
            officia consequuntur cum
          </p>
          <footer style={{ fontSize: ".875em", color: "#6c757d" }}>
            musazulfqar1@hotmail.com
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default UserComment;
