import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./styles/SideMenue.css";

export default SideMenue = () => {
  return (
    <>
      <div className="sidebar">
        <div className="title">
          <h1>GariTimes</h1>
        </div>
        <ul className="nav">
          <li>
            <a href="" title="Reactを学び始める">
              Reactを学び始める
            </a>
          </li>
          <li>
            <a href="" title="gRPCを叩く">
              gRPCを叩く
            </a>
          </li>
          <li>
            <a href="" title="ディズニーのチケット戦争に敗退">
              ディズニーのチケット戦争に敗退
            </a>
          </li>
          <li>
            <a href="" title="ピアノがいい感じに弾けるようになってきた">
              ピアノがいい感じに弾けるようになってきた
            </a>
          </li>
          <li>
            <a href="" title="ピアノがいい感じに弾けるようになってきた">
              コロナワクチンついに予約
            </a>
          </li>
        </ul>
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
      </div>
    </>
  );
};
