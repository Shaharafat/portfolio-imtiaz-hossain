import React from "react";
const ToolBox = ({ image, toolName }) => {
  return (
    <div className="toolbox">
      <img src={image} className="toolbox__image" alt={toolName} />
      <p className="toolbox__title">{toolName}</p>
    </div>
  );
};

export default ToolBox;
