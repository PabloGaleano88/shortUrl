import React from "react";
import "./header.css";
import waltonWorks from "../../assets/waltonWorks.png";

const header = ({ toggleSidebar }) => {
  return (
    <>
      <div className="navbar">
        <div className="waltonworks">
          <img src={waltonWorks} alt="WaltonWorks" />
          <span>Welcome Guest</span>
        </div>
        <ul className="links-center">
          <li>
            <a href="">What is this?</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">My Links</a>
          </li>
        </ul>
        <ul>
          <li>
            <button
              className="button-black"
              onClick={() => toggleSidebar("signUp")}
            >
              Sign up
            </button>
          </li>
          <li>
            <button
              className="button-black"
              onClick={() => toggleSidebar("signIn")}
            >
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default header;
