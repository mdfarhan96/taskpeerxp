import React, { useState } from "react";
import "./page.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [postPageActive, setPostPageActive] = useState(false);
  const [linkPageActive, setLinkPageActive] = useState(false);

  const homeActiveFn = () => {
    setHomeActive(true);
    setLinkPageActive(false);
    setPostPageActive(false);
  };

  const postActiveFn = () => {
    setHomeActive(false);
    setLinkPageActive(false);
    setPostPageActive(true);
  };

  const linkActiveFn = () => {
    setHomeActive(false);
    setLinkPageActive(true);
    setPostPageActive(false);
  };

  return (
    <div>
      <div className="logo">
        <span className="text-vertical">the</span>
        <span className="text-capital">peerXP</span>
      </div>
      <div className="row">
        <div className="col-xl-11 mx-auto  row1 p-3">
          <div className="row">
            {homeActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto  text-center ">
                {" "}
                <Link to="/" className="text-deco-none">
                  <p className="nav-btn-active "> Dashboard </p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto  text-center "
                onClick={homeActiveFn}
              >
                {" "}
                <Link to="/" className="text-deco-none">
                  <p className="nav-btn"> Dashboard </p>
                </Link>
              </div>
            )}
            {postPageActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center ">
                <Link to="/posts-page" className="text-deco-none">
                  <p className="nav-btn-active ">Post Page</p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center "
                onClick={postActiveFn}
              >
                <Link to="/posts-page" className="text-deco-none">
                  <p className="nav-btn ">Post Page</p>
                </Link>
              </div>
            )}
            {linkPageActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center ">
                <Link to="/links-page" className="text-deco-none">
                  <p className="nav-btn-active ">Link Page</p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center "
                onClick={linkActiveFn}
              >
                <Link to="/links-page" className="text-deco-none">
                  <p className="nav-btn ">Link Page</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
