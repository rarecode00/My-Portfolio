import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-side">
      <div className="profile">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDwTLbK9NwlI2rpMD2waNlXgGTb5-1ZV9Pu2wPv8jqyA1xaC0H6aElSl9iP_n_LLLtnI&usqp=CAU" />
          <p className="name">Krishna Sharma</p>
          <div className="title">Software Engineer</div>
          <div className="title">Full stack developer</div>
        </div>
        </div>
      <div className="nav-items">
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/interest">Interest</Link>
      </div>
    </div>
  );
};

export default Navbar;
