import React from "react";
import waltonWorks from "../../assets/waltonWorks.png";
import HomeIcon from "@mui/icons-material/Home";

const redirectHeader = () => {
  return (
    <>
      <div className="navbar">
        <div className="waltonworks">
          <img src={waltonWorks} alt="WaltonWorks" />
          <span>ShortMyURL</span>
        </div>
        <ul>
          <li>
            <a className="button-black" href="http://localhost:5173">
              Go to Home
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default redirectHeader;
