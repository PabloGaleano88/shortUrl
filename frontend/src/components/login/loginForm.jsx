import React from "react";
import "./loginForm.css";
import CloseIcon from "@mui/icons-material/Close";

import Signup from "../signup/signup";
import Signin from "../singin/signin";
/* import Signin from "../signup/signin"; */

const loginForm = ({ activeForm, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div>
      <div className={`testlogin ${isSidebarOpen ? "open" : "close"}`}>
        <div>
          <button
            className="close-button"
            onClick={() => setIsSidebarOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="division"></div>
        {activeForm === "signUp" ? <Signup /> : <Signin />}
        {console.log(activeForm)}
      </div>
    </div>
  );
};

export default loginForm;
