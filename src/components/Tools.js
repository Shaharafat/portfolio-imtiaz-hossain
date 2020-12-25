import React,{useEffect,useRef} from "react";
import { data } from "../data";
import ToolBox from "./ToolBox";

const Tools = () => {
  return (
    <div className="tools" id="tools">
      <div className="tools__content content-wrapper">
        {data.map((item) => (
          <ToolBox key={item.toolName}  image={item.image} toolName={item.toolName} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
