import "./intro.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { addGeo } from './../../store/reducers/geoSlice';

function Intro() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hiddenState, setHiddenState] = useState(false);
  const [logoState, setLogoState] = useState(false);

  function hideIntroBlock() {
    getGeoInfo();
    setHiddenState(true);
    setLogoState(true);
    setTimeout(() => {
      navigate(`/weather`);
    }, 2000);
  }

function getGeoInfo() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      dispatch(addGeo({lat: position.coords.latitude, lon: position.coords.longitude}));
    },
  );

}

  return (
    <div className="intro">

      <div className="intro__container">
        <div className={`intro__logo ${logoState ? "goLeft" : ""}`}></div>

        <div className={`intro__block ${hiddenState ? "hidden" : ""}`}>
          <h1 className="intro__greeting">Hi there!</h1>

          <p className="intro__text">
            It's a weather-news-app – best solution for individual farmers. <br/> It can show you the current weather
            conditions, agricultural news and the most favorable dates for planting.
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
