import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <span className="about-name">
        {" "}
        <span className="first-name">Krishna</span> Sharma
      </span>
      <ul className="about-points">
        <li>Software developer aim for excellence.</li>
        <li>
          Undergraduate computer science student at Sanskar College of
          Engineering and Technology in final year.
        </li>
      </ul>

      <div className="about-me">
        <i class="fa-sharp fa-solid fa-location-dot">
          <span>UttarPradesh, India</span>
        </i>
        <i class="fa-solid fa-envelope">
          <span>Ks9192174414@gmail.com</span>
        </i>
        <i class="fa-solid fa-phone">
          <span>+91-8171841691</span>
        </i>
      </div>

      <div className="social-profiles">
        <a href="https://www.linkedin.com/in/rarecode/" target={"_blank"}>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/rarecode00" target={"_blank"}>
          <i class="fa-brands fa-github"></i>
        </a>
        <button>
          <i class="fa-solid fa-cloud-arrow-down"></i>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default About;
