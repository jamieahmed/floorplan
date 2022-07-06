import React from "react";
import app from './App.css'
import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Livingroom from "./Livingroom";

const App = (props) => {
  return (
    <div className="floorplan">
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full" />
      <Bedroom bedNum={2} />
      <Livingroom />
      <Bath size="Half" />
      <Bedroom bedNum={3} />
    </div>
  );
};

export default App;
