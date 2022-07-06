import React from "react";
import oven from "./oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <div id="kitchen">
      <oven />
      <sink />
      <span>Kitchen</span>
    </div>
  );
};

export default Kitchen;
