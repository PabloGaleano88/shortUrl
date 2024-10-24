import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
import "./form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { green } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    url: "",
    duration: "1",
  });
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [originalUrl, setOriginalUrl] = useState("");
  const [expiredAt, setExpiredAt] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("URL copied!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetIsLoading(true);
    axios
      .post("http://localhost:3000/", {
        original_url: formData.url,
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
    setFormData({ url: "", duration: "1" });
  };

  const colortheme = {
    color: "#000",
    "&.Mui-checked": {
      color: green["A400"],
    },
  };

  return (
    <div className="form-container">
      <form className="form-style" onSubmit={handleSubmit}>
        <label htmlFor="url">
          <LinkIcon />
          Insert the URL that you want to shorten
        </label>
        <div className="input-wrapper">
          <span className="prefix">http://</span>
          <input
            className="input-url"
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="www.example.com"
            required
          />
        </div>
        <div className="radio-buttons-description">
          <AccessTimeIcon />
          Choose short link time duration
        </div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <FormControlLabel
              value="1"
              control={<Radio sx={colortheme} />}
              label="1 day"
            />
            <FormControlLabel
              value="5"
              control={<Radio sx={colortheme} />}
              label="5 days"
            />
            <FormControlLabel
              value="7"
              control={<Radio sx={colortheme} />}
              label="7 days"
            />
            <FormControlLabel
              value="30"
              control={<Radio sx={colortheme} />}
              label="30 days"
            />
          </RadioGroup>
        </FormControl>

        <button className="submit-button" type="submit">
          Generate Link
        </button>
      </form>
      <div className="result">
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
      </div>
      <p></p>
    </div>
  );
};

export default ContactForm;
