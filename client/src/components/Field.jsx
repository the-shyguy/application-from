import React from "react";

const Field = ({ text, info }) => {
  return (
    <div className="flex mb-4 text-lg">
      <p className="font-semibold mr-2">{text}: </p>
      <p>{info}</p>
    </div>
  );
};

export default Field;
