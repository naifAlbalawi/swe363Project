import React from "react";
import PropTypes from "prop-types";
import call from "../images/call.png";
import share from "../images/share.png";
import menu from "../images/menu.png";
import edit from "../images/edit.png";
import deletep from "../images/delete.png";
import report from "../images/report.png";
import block from "../images/block.png";

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

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
        <div className="card-dropdown" data-dropdown>
          <input
            className="link card-contact"
            data-dropdown-button
            type="image"
            src={menu}
            alt="Menu"
          />
          <div className="card-dropdown-menu">
            <div className="dropdown-links">
              <a href="#" className="link">
                Edit
                <img className="icon" src={edit} alt="edit" />
              </a>
              <hr />
              <a href="#" className="link red">
                Delete
                <img className="icon" src={deletep} alt="delete" />
              </a>
              <hr />
              <a href="#" className="link red user">
                Report
                <img className="icon" src={report} alt="report" />
              </a>
              <a href="#" className="link red admin">
                Block
                <img className="icon" src={block} alt="block" />
              </a>
            </div>
          </div>
        </div>
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
