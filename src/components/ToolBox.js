import React,{useRef,useEffect} from "react";
import { createObserver } from '../helper'

const ToolBox = ({ image, toolName }) => {
  const toolElement = useRef(null);
  
  useEffect(() => {
    createObserver(toolElement.current);
  })
  
  return (
    <div ref={toolElement} className="toolbox off-animation">
      <img src={image} className="toolbox__image" alt={toolName} />
      <p className="toolbox__title">{toolName}</p>
    </div>
  );
};

export default ToolBox;
