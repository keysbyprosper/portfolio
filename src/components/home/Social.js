import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/theprosperademoye/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/prosper-ademoye-83535a250/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
}

export default Social;
