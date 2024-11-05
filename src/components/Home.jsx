import React, { useState, useEffect } from "react";
import "./Home.css";
import Intro from "./Intro";
import Books from "./Books";
import Projects from "./Projects";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      console.log("loaded");
    };

    if (document.readyState === "complete") {
      // If the page is already loaded
      handleLoad();
    } else {
      // If the page is still loading, listen for the load event
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div className="home-container">
      <div className={loading ? "loader-container" : "loader-container hidden"}>
        <div className="loader"></div>
      </div>
      <div
        className={
          loading ? "content-container hidden" : "content-container show"
        }
      >
        <Intro />
        <Books />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
