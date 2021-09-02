import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ShareIcons = () => {
  return (
    <ul className="share">
      <li>
        <a href="" title="_brank">
          <FaFacebookF className="fa" />
        </a>
      </li>
      <li>
        <a href="" title="_brank">
          <FaTwitter className="fa" />
        </a>
      </li>
      <li>
        <a href="" title="_brank">
          <FaLinkedinIn className="fa" />
        </a>
      </li>
    </ul>
  );
};

export default ShareIcons;
