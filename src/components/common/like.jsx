import React from "react";

// Input: liked: boolean
// Output: onClick

const Like = ({ liked, onLikeClicked }) => {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
      onClick={onLikeClicked}
    ></i>
  );
};

export default Like;
