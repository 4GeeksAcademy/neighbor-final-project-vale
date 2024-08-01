import React from "react";

const TitleProfiles = ({ title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-4 flex-grow-1">
      <h1>Información personal {title}</h1>
    </div>
  );
};

export default TitleProfiles;
