import React from "react";
import { useRef } from "react";

function Forms() {
  var x = useRef(null); // document.getElementById("LostForm");
  var y = useRef(null); //document.getElementById("FoundForm");
  var z = useRef(null); //document.getElementById("btn");
  var r = useRef(null); //document.getElementById("FoundFB");
  var t = useRef(null); //document.getElementById("LostFB");

  function Lost() {
    x.current.style.right = "100%";
    y.current.style.left = "0";
    z.current.style.left = "150px";
    r.current.style.color = "white";
    t.current.style.color = "grey";
  }

  function Found() {
    y.current.style.left = "100%";
    x.current.style.right = "0";
    z.current.style.left = "0px";
    t.current.style.color = "white";
    r.current.style.color = "grey";
  }

  return (
    <div>
      <div className="FormBack" id="FormBack">
        <div className="form-box">
          <div className="button-box">
            <div ref={z} id="btn"></div>
            <button
              type="button"
              className="toggle-btn"
              ref={t}
              id="LostFB"
              onClick={Found}
            >
              Lost Post
            </button>
            <button
              type="button"
              className="toggle-btn"
              ref={r}
              id="FoundFB"
              onClick={Lost}
            >
              Found Post
            </button>
          </div>
          <form ref={x} id="LostForm" className="inputG">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                id="fullname"
                className="input-field"
                name="full_name"
                placeholder="  khalid alharbi"
                required
              />
              <label> Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="XXXX@domain.com"
                required
              />
            </div>

            <label>where did you lost it?</label>
            <select name="Where" className="input-field">
              <option disabled selected>
                building
              </option>
              <option>Building 59</option>
              <option>Building 68</option>
              <option>Building 27</option>
              <option>Building 19</option>
            </select>
            <label>Item description</label>
            <textarea
              name="description"
              className="input-field"
              cols="30"
              rows="4"
              placeholder="green iphone with a blue cover"
              required
            ></textarea>
            <div className="file-input">
              <input type="file" id="file" className="file" />
              <label htmlFor="file">upload image</label>
            </div>
            <br />
            <button type="submit" className="sumbit-btn">
              create post
            </button>
          </form>

          <form ref={y} id="FoundForm" className="inputG">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                id="fullname"
                className="input-field"
                name="full_name"
                placeholder="  khalid alharbi"
                required
              />
              <label> Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="XXXX@domain.com"
                required
              />
            </div>

            <label>where did you found it?</label>
            <select name="Where" className="input-field">
              <option disabled selected>
                building
              </option>
              <option>Building 59</option>
              <option>Building 68</option>
              <option>Building 27</option>
              <option>Building 19</option>
            </select>
            <label>Item description</label>
            <textarea
              name="description"
              className="input-field"
              cols="30"
              rows="4"
              placeholder="green iphone with a blue cover"
              required
            ></textarea>
            <div className="file-input">
              <input type="file" id="file" className="file" />
              <label htmlFor="file">upload image</label>
            </div>
            <br />
            <button type="submit" className="sumbit-btn">
              create post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Forms;
