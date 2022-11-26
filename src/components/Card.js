import React from "react";
import PropTypes from "prop-types";
import call from "../images/call.png";
import share from "../images/share.png";

function Card({ title, tags, src, alt, body, phone, time }) {
  const copy = () => {
    const out = `
    I want to share this item post from OurWebsite
    *${title}*
    ---------
    ${body}

    call ${phone}
    `;

    navigator.clipboard.writeText(out);
  };
  return (
    <div className="card-container">
      <div className="header-container">
        <div className="head-tag">
          <h3 className="card-header">{title}</h3>
          <span className="card-tags">{tags}</span>
        </div>
        {/* <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
      </div>
      <img className="card-img" src={src} alt={alt} />
      <p className="card-body">{body}</p>
      <div className="footer-container">
        <form className="card-contact-container">
          <input
            className="card-contact"
            type="image"
            src={call}
            alt="Call"
            formAction={`tel:${phone}`}
          />
          <input
            className="card-contact"
            type="image"
            src={share}
            alt="Share"
            onClick={() => copy()}
            formAction={`none`}
          />
        </form>
        <p className="card-date">{time}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  body: PropTypes.string,
  phone: PropTypes.string,
  time: PropTypes.string,
};

export default Card;
