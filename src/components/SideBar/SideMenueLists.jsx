import React, { useEffect } from "react";
import { DEFAULT_LIST_ITEMS } from "../../store/constants";
import SideMenueItem from "./SideMenueItem";

export default SideMenueLists = () => {
  const defaultItems = () =>
    DEFAULT_LIST_ITEMS.map((item, index) => (
      <SideMenueItem key={index} href={item.href} title={item.title} />
    ));

  return <ul className="nav">{defaultItems()}</ul>;
};
