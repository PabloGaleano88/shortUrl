import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./redirect.css";

const Redirect = () => {
  const { url } = useParams();
  const [originalUrl, setOriginalUrl] = useState("");
  const [count, setCount] = useState(5);
  const hasFetched = useRef(false);
  const intervalId = useRef(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;

      axios
        .get(`http://localhost:3000/${url}`)
        .then((response) => {
          setOriginalUrl(response.data);

          intervalId.current = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount <= 1) {
                clearInterval(intervalId.current);
                if (!isCancelled) {
                  window.location.href = response.data;
                }
                return 0;
              }
              return prevCount - 1;
            });
          }, 1000);

          return () => clearInterval(intervalId.current);
        })
        .catch((error) => {
          console.error("Error al obtener la URL original:", error);
        });
    }
  }, [url, isCancelled]);

  const handleCancel = () => {
    clearInterval(intervalId.current);
    setIsCancelled(true);
  };

  return (
    <div className="redirect-text">
      <p className="shorturl-link">http://localhost:3000/{url}</p>
      <h3>You will be redirected in {count} seconds....</h3>
      <h2 className="redirect_urls">to:</h2>
      <div>
        <a className="originalurl-link" href={originalUrl}>
          {originalUrl}
        </a>
      </div>
      <button className={isCancelled && "button-pushed"} onClick={handleCancel}>
        Cancel Redirect
      </button>
    </div>
  );
};

export default Redirect;
