import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./landingpage.scss";
import AboutMe from "./AboutMe";

function LandingPage({ refs }: PropsType) {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    let listener = Math.floor(Math.random() * 10);
    const eff = function () {
      setScrolled(
        refs.current?.scrollTop && refs.current?.scrollTop > 50
          ? refs.current?.scrollTop
          : 0
      );
      console.log(scrolled, "id :", listener);
    };
    refs.current?.addEventListener("scroll", eff);
    return () => {
      refs.current?.removeEventListener("scroll", eff);
    };
  }, [refs]);
  return (
    <div className={"landing-page " + (scrolled ? "scrolled" : "")}>
      <a
        href="Ali Soliman - CV.pdf"
        target="_blank"
        className={`download-cv-flow ${
          scrolled >= window.innerHeight * 0.7 ? "active" : ""
        }`}
        style={{
          transform: `translateY(${scrolled}px)`,
        }}
      >
        View CV
      </a>
      <Navbar />
      <div className="intro">
        <div
          className="bg"
          style={{
            filter: `hue-rotate(${Math.floor(scrolled / 3)}deg)`,
            transform: `translateY(${scrolled / 6}px)`,
          }}
        ></div>
        <h2>Hello, I'm</h2>
        <h2>RustedMind</h2>
        <h2>Full-Stack Developer</h2>
      </div>
      <AboutMe />
    </div>
  );
}

export default LandingPage;

type PropsType = {
  refs: React.RefObject<HTMLDivElement>;
};
