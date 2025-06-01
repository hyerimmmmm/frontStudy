import React from "react";

const TeamList = (props) => {
  return (
    <div>
      <p>{props.depart}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default TeamList;
