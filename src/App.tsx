import "./app.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/langing-page/LandingPage";
import bg from "./content/app-bg-video.mp4";
import bgimg from "./content/bg-static2.jpg";
import React, { useContext, useRef } from "react";
import { Context } from "./contexts/PageContext";
import WorksPage from "./pages/works-page/WorksPage";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [pageState] = useContext(Context);
  return (
    <div className="app">
      {/* <video
        className={`bg-main ${pageState.isLoading ? "loading" : ""}`}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={bg} />
        Your Browser doesn't Support this effect type
      </video> */}
      <img
        className={`bg-main ${pageState.isLoading ? "loading" : ""}`}
        alt="background"
        src={bgimg}
      />
      <div
        className={`page ${pageState.isLoading ? "loading" : ""}`}
        id="Page"
        ref={ref}
      >
        <Routes>
          <Route path="/" element={<LandingPage refs={ref} />} />
          <Route path="/works" element={<WorksPage refs={ref} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
