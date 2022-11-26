import React from "react";
import PropTypes from "prop-types";

function Intro({ text }) {
  return (
    <section id="intro">
      <div className="intro-body">
        <h1 className="identity">{text}</h1>
      </div>
    </section>
  );
}

Intro.propTypes = {
  text: PropTypes.string,
};
export default Intro;
