import { useState } from "react";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { green } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "./signup.css";

const signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetIsLoading(true);
    axios
      .post("http://localhost:3000/", {
        original_url: formData.username,
        duration: formData.duration,
      })
      .then(function (response) {
        const { shortUrl, originalUrl, expiredAt } = response.data;
        setShortUrl(shortUrl);
        setOriginalUrl(originalUrl);
        setExpiredAt(expiredAt);
        SetIsLoading(false);
      })
      .catch(function (error) {
        setShortUrl(error);
        SetIsLoading(false);
      });
    console.log("Formulario enviado:", formData);
    setFormData({ username: "", duration: "1" });
  };

  const colortheme = {
    color: "#000",
    "&.Mui-checked": {
      color: green["A400"],
    },
  };

  return (
    <div className="log-form">
      <form onSubmit={handleSubmit}>
        <div className="login-wrapper">
          <label htmlFor="name">Name</label>
          <input
            className="input-name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className="input-email"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="username">Password</label>
          <input
            className="input-password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Create Account
        </button>
      </form>
      <div>
        Already a user?{" "}
        <button
          className="button-black"
          onClick={() => toggleSidebar("signIn")}
        >
          Sign in
        </button>
      </div>
      {/*       <div className="result">
        {isLoading ? (
          <Stack>
            <CircularProgress color="success" />
          </Stack>
        ) : (
          <div className={shortUrl ? "show_url" : ""}>
            {shortUrl && (
              <>
                <div className="link-data">Original URL: {originalUrl}</div>
                <div>
                  <label>{shortUrl}</label>
                  <span>
                    <ContentCopyIcon
                      onClick={handleCopy}
                      style={{
                        cursor: "pointer",
                        marginLeft: "15px",
                      }}
                    />
                  </span>
                </div>
                <div className="link-data">
                  Link Expired at : {expiredAt.slice(0, 10)}
                </div>
              </>
            )}
          </div>
        )}
      </div> */}
      <p></p>
    </div>
  );
};

export default signup;
