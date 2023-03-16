import React from "react";

const Skills = () => {
  return (
    <div className="skill">
      <span className="header">
        Skills <hr />
      </span>
      <div className="skill-now">
        <div className="skill-head">
          <div className="pointer"></div>Using Now
        </div>
        <div class="skill-list">
          <div class="skill-item">
            <img src="/images/logo192.png" alt="logo" />
            <span>React JS</span>
          </div>
          <div class="skill-item">
            <img src="/images/next-js-icon-logo-EE302D5DBD-seeklogo.com-removebg-preview.png" alt="logo" />
            <span>Next JS</span>
          </div>
          <div class="skill-item">
            <img src="/images/174854-removebg-preview.png" alt="logo" />
            <span>HTML</span>
          </div>
          <div class="skill-item">
            <img src="images/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design-removebg-preview.png" alt="logo" />
            <span>CSS</span>
          </div>
          <div class="skill-item">
            <img src="images/png-transparent-postgresql-database-logo-computer-icons-replication-software-developer-miscellaneous-blue-mammal-thumbnail-removebg-preview.png" alt="logo" />
            <span>Postgres</span>
          </div>
          <div class="skill-item">
            <img src="https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png" alt="logo" />
            <span>Firebase</span>
          </div>
          <div class="skill-item">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="logo" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
