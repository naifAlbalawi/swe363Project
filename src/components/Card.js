import React from "react";
import PropTypes from "prop-types";
import call from "../images/call.png";
import share from "../images/share.png";
import menu from "../images/menu.png";
import edit from "../images/edit.png";
import deletep from "../images/delete.png";
import report from "../images/report.png";

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (isDropdownButton && e.target.closest("[data-dropdown]") === null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    if (currentDropdown.classList.contains("active"))
      currentDropdown.classList.remove("active");
    else currentDropdown.classList.add("active");
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

function Card({
  id,
  user,
  email,
  title,
  tags,
  src,
  alt,
  body,
  phone,
  time,
  profile,
}) {
  const copy = () => {
    const out = `I want to share with you this item post from FoundLostItems Website:
    *${title}*
    ${phone}
    http://localhost:3000/posts?id=${id}
    `;
    navigator.clipboard.writeText(out);
  };
  if (profile) {
    return (
      <div className="card-container">
        <div className="card-content profile">
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
                <a href="#" className="link">
                  Edit
                  <img className="icon" src={edit} alt="edit" />
                </a>
                <hr />
                <a href="#" className="link red">
                  Delete
                  <img className="icon" src={deletep} alt="delete" />
                </a>
              </div>
            </div>
          </div>
          {src === "" ? (
            <></>
          ) : (
            <img className="card-img" src={src} alt={alt} />
          )}
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
                  onClick={(e) => {
                    copy();
                    e.preventDefault();
                  }}
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
  } else {
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
              {/* <a href="#" className="link">
                Profile
                <img className="icon" src={profileimg} alt="profile" />
              </a>
              <hr /> */}
              <a
                onClick={(e) => {
                  copy();
                  e.preventDefault();
                }}
                className="link red"
              >
                Report
                <img className="icon" src={report} alt="report" />
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
          {src === "" ? (
            <></>
          ) : (
            <img className="card-img" src={src} alt={alt} />
          )}
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
                  onClick={(e) => {
                    copy();
                    e.preventDefault();
                  }}
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
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  body: PropTypes.string,
  phone: PropTypes.string,
  time: PropTypes.string,
  user: PropTypes.string,
  email: PropTypes.string,
  profile: PropTypes.bool,
};

export default Card;
