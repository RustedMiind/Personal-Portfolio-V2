import { useState } from "react";
import "./aboutme.scss";

function AboutMe() {
  const [page, setPage] = useState<"PERSONAL" | "SKILLS" | "EDUCATION">(
    "SKILLS"
  );
  return (
    <div className="about-me">
      <div className="left-nav">
        <button
          className={`section-button ${page === "EDUCATION" ? "active" : ""}`}
          onClick={() => {
            setPage("EDUCATION");
          }}
        >
          Education
        </button>
        <button
          className={`section-button ${page === "SKILLS" ? "active" : ""}`}
          onClick={() => {
            setPage("SKILLS");
          }}
        >
          Skills
        </button>
        <button
          className={`section-button ${page === "PERSONAL" ? "active" : ""}`}
          onClick={() => {
            setPage("PERSONAL");
          }}
        >
          Personal Info
        </button>
      </div>
      <div className="content">
        <div className="pages">
          <div
            className={`page personal " + ${
              page === "PERSONAL" ? "active" : ""
            }`}
          >
            <div className="section">
              <h3>I'm Ali Soliman</h3>
              <p>
                A highly competent Front-End Web Developer. <br />
                Familiar with Full-Stack development using MERN Stack.
                <br />
                I provide clean perfect code for re-usability, taking care of
                system performance.
                <br />I have a knack for finding solutions to problems, no
                matter how difficult they are
              </p>
            </div>
            <div className="section">
              <p>Age: 19 Years old</p>
              <p>Birth date: 6 - 7 - 2003</p>
              <p>Nationality: Egyptian</p>
              <p>Current Location: Helwan, Cairo</p>
            </div>
            <div className="section">
              <h3>Hoppies and interests</h3>
              <p>Playing Chess</p>
              <p>Solve Programming Problems</p>
              <p>Playing Online Competitive Games</p>
            </div>
          </div>
          <div
            className={`page skills " + ${page === "SKILLS" ? "active" : ""}`}
          >
            <div className="section-double">
              <div className="nested-section">
                <h2>Front-End Web Development</h2>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap CSS</li>
                  <li>Marerial UI</li>
                  <li>OOP</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="nested-section">
                <h2>Back-End Web Development</h2>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`page education " + ${
              page === "EDUCATION" ? "active" : ""
            }`}
          >
            <div className="section">
              <h3>
                Studying at Faculty of Arts <span>Helwan University</span>
              </h3>
              <p>Oriental Languages Department.</p>
              <p>2022 – 2026 (Estimated)</p>
            </div>
            <div className="section">
              <h3>Studied at El Nahda Experimental Language School.</h3>
              <p>Mathematics Department.</p>
              <p>2019 – 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
