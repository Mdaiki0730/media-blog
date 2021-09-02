import React from "react";

const SideMenueItem = ({ href, title }) => {
  return (
    <li>
      <a href={href} title={title}>
        {title}
      </a>
    </li>
  );
};

export default SideMenueItem;
