import React from "react";
import "./newsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="container">
        <div className="newsletterWrapper">
          <div className="texts">
            <h1>Subscribe To Our Newsletter</h1>
            <p>Get all the latest information on Events, Sales and Offers.</p>
          </div>
          <form className="inputs">
            <input type="text" placeholder="Enter your email" />
            <button
              className="btn"
              style={{ backgroundColor: "#ff5200", padding: "16px" }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
