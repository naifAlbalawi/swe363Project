import React from "react";
import PropTypes from "prop-types";
import call from "../images/call.png";
import share from "../images/share.png";
import menu from "../images/menu.png";
import edit from "../images/edit.png";
import deletep from "../images/delete.png";
import report from "../images/report.png";
import block from "../images/block.png";
import profile from "../images/profile.png";

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown.classList.contains("copy")) {
      setTimeout(function () {
        dropdown.classList.remove("active");
        blurAll();
      }, 700);
    }
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove("active");
      blurAll();
    } else return;
  });
});

function blurAll() {
  var tmp = document.createElement("input");
  document.body.appendChild(tmp);
  tmp.focus();
  document.body.removeChild(tmp);
}

function Card({ user, email, title, tags, src, alt, body, phone, time }) {
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
      <div className="card-profile">
        <div className="head-tag">
          <h3 className="card-header">{user}</h3>
          <span className="card-tags">{email}</span>
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
            <a href="#" className="link">
              Profile
              <img className="icon" src={profile} alt="profile" />
            </a>
            <hr />
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
            <a href="#" className="link red">
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
      <div className="card-content">
        <div className="header-container">
          <div className="head-tag">
            <h3 className="card-header">{title}</h3>
            <span className="card-tags">{tags}</span>
          </div>
        </div>
        <img className="card-img" src={src} alt={alt} />
        <p className="card-body">{body}</p>
        <div className="footer-container">
          <form className="card-contact-container">
            <input
              className="link card-contact"
              type="image"
              src={call}
              alt="Call"
              formAction={`tel:${phone}`}
            />
            <div className="card-dropdown copy" data-dropdown>
              <input
                className="link card-contact"
                type="image"
                src={share}
                alt="Share"
                onClick={() => copy()}
                formAction="javascript:return false;"
                data-dropdown-button
              />
              <div className="card-dropdown-menu">
                <span className="copy-content link">copied!</span>
              </div>
            </div>
          </form>
          <p className="card-date">{time}</p>
        </div>
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
  user: PropTypes.string,
  email: PropTypes.string,
};

export default Card;
