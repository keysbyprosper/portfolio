import React from "react";
import Social from "./Social";
import "./home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useState, useEffect } from "react";

function Home() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationDone(true);
    }, 1000); // Adjust the delay (in milliseconds) to match the animation duration

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div
      className={`transition-effect ${animationDone ? "animation-done" : ""}`}>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
}

export default Home;
