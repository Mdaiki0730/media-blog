import React from "react";
import SideMenueLists from "./SideMenueLists";
import ShareIcons from "../utils/ShareIcons";
import "../styles/SideMenue.css";

export default SideMenue = () => {
  const titleName = "GariTimes";
  return (
    <div className="sidebar">
      <div className="title">
        <h1>{titleName}</h1>
      </div>
      <SideMenueLists />
      <ShareIcons />
    </div>
  );
};
