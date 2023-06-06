import "./intro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  const [hiddenState, setHiddenState] = useState(false);
  const [logoState, setLogoState] = useState(false);

  function hideIntroBlock() {
    setHiddenState(true);
    setLogoState(true);
    setTimeout(() => {
      navigate(`/weather`);
    }, 2000);
  }

  return (
    <div className="intro">

      <div className="intro__container">
        <div className={`intro__logo ${logoState ? "goLeft" : ""}`}></div>

        <div className={`intro__block ${hiddenState ? "hidden" : ""}`}>
          <h1 className="intro__greeting">Hi there!</h1>

          <p className="intro__text">
            It's a weather-news-app. It can show you the current weather
            conditions and agricultural news based on the weather.
          </p>
          <button
            className={`intro__btn`}
            onClick={hideIntroBlock}
          >
            Try!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
