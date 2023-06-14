import "./moonCalendar.css";

import { useSelector } from "react-redux";

import Sidebar from "../../components/blocks/sidebar/sidebar";
import GardenCard from "../../components/elements/CropsCard/CropsCard";
import { dates } from "../../dates";
import { moonphases } from "../../moonphases";
import { crops } from "../../crops";
import {
  getDayFullName,
  getMonthName,
  getDate,
  getMonthFullName,
} from "./../../selectors/dateSelector";
import { getCropsArticleID } from "./../../selectors/cropsArticleSelector";
import { useEffect, useState } from "react";

function MoonCalendar(location) {

  const day = useSelector(getDayFullName);
  const month = useSelector(getMonthName);
  const fullmonth = useSelector(getMonthFullName);
  const date = useSelector(getDate);
  const cropsArticle = useSelector(getCropsArticleID);

  const favorableDates = dates[month]?.favorable.join(", ");
  const unfavorableDates = dates[month]?.unfavorable.join(", ");

  const [moonPhase, setMoonPhase] = useState([]);

  useEffect(() => {
    let moon = moonphases[month];
    let url;
    let currentMoonPhase;
    if (date) {
      if (moon.full.includes(date)) {
        currentMoonPhase = "Full moon";
        url = "./images/icons/fullmoon.png";
      } else if (moon.new.includes(date)) {
        currentMoonPhase = "New moon";
        url = "./images/icons/newmoon.png";
      } else if (moon.waxing.includes(date)) {
        currentMoonPhase = "Waxing moon";
        url = "./images/icons/waxingmoon.png";
      } else if (moon.waning.includes(date)) {
        currentMoonPhase = "Waning moon";
        url = "./images/icons/waningmoon.png";
      }
      let moondata = [url, currentMoonPhase];
      setMoonPhase(moondata);
    }
  },[date, month]);

  const [cropsList, setCropsList] = useState([]);

  useEffect (() => {
    let favorableCropsArray = [];
    if (date) {
      for (let key in crops) {
        let monthArray = crops[key].favorable[fullmonth];
        if (monthArray.includes(date)) {
          favorableCropsArray.push(crops[key]);
        }
      }
      setCropsList(favorableCropsArray);
    }
  },[date, fullmonth]);

  const [isCropsListEmpty, setCropsListEmpty] = useState(true);

  useEffect(() => {
    if (cropsList.length > 0) {
      setCropsListEmpty(false)
    } else {
      setCropsListEmpty(true)
    }
  },[cropsList])

  return (
    <div className="page">
      <header>
        <Sidebar location={location} />
      </header>

      <main className="page__main">
        <h1 className="page__title">Moon calendar for {fullmonth}</h1>
        <div className="moonCalendar">
          <div className="moonCalendar__left">
            <div className="body__top">
              <div className="moon__info">
                <div className="moon__infoblock">
                  <h2 className="moon__date">
                    {date}
                    <span className="moon__month">{month}</span>
                  </h2>
                  <span className="moon__day">{day}</span>
                </div>

                <div className="moon__infoblock">
                  <div className="moon__image">
                    <img className="moon__base" src={moonPhase[0]} alt="" />
                  </div>
                  <span className="moon__condition">{moonPhase[1]}</span>
                </div>
              </div>

              <div className="days__info">
                <h3 className="daysInfo__title">
                  <svg
                    className="daysInfo__icon"
                    width="22px"
                    height="22px"
                    viewBox="0 0 678.32 651.92"
                    fill="#007155"
                  >
                    <path
                      d="M555.11 235.92c0,12.06 3.79,22.55 7.92,30.5 5.69,10.93 13.72,19.01 22.74,
                            26.28l26.5 22.52c4.49,3.57 6.4,5.74 9.08,10.8 -4.68,8.84 -11.67,12.83 -18.88,
                            19.54 -39.5,36.72 -58.22,43.33 -41,111.89 2.13,8.49 6.89,25.34 6.89,34.18 -46.65,
                            10.87 -84.15,-2.29 -112.05,40.31 -11.09,16.93 -20.19,48.81 -29.71,63.03 -3.42,
                            -1.64 -6.34,-2.46 -10.19,-4.38 -4.49,-2.24 -6.05,-3.44 -9.94,-5.96 -44.4,
                            -28.74 -66.43,-39.87 -114.94,-12.12 -7.41,4.24 -32.36,20.82 -38.49,22.45 -11.86,
                            -7.94 -16.19,-50.24 -44.02,-77.86 -21.92,-21.74 -57.95,-18.35 -85.48,-21.84 -3.33,
                            -0.42 -9.64,-1.99 -13.58,-2.32 0,-43.34 31.14,-72 -2.27,-116.97 -10.87,-14.63 
                            -20.33,-19.62 -30.52,-29.1 -6.48,-6.03 -15.53,-12.55 -20.21,-19.54 4.43,-19 66.24,
                            -42.83 66.24,-90.09 0,-35.59 -13.25,-56.47 -13.25,-75.52 0,-9.14 69.31,-0.13 
                            97.05,-24.84 22.39,-19.95 28.99,-52.62 43.38,-79.82 8.53,1.99 14.82,6.38 21.2,
                            10.6 41.67,27.56 67.24,41.85 114.2,13.52 6.77,-4.09 13.28,-8.01 19.61,-12.19 4.64,
                            -3.06 14.79,-10.06 21.2,-10.6 8.29,12.37 12.55,27.23 19.41,41.53 16.01,33.34 
                            26.53,48.32 67.61,54.28 17.25,2.5 38.04,2.32 54.73,6.21 0,19.4 -13.25,47.45 
                            -13.25,75.52zm-488.87 -2.65c0,18.39 -66.24,45.14 -66.24,88.76 0,25.31 6.12,31.23 
                            19.29,48.27 4.76,6.16 17.83,16.03 22.78,20.95 22.13,22.01 28.38,15.02 20.2,47.37 
                            -3.45,13.66 -9.28,34.17 -9.28,50.34 0,46.12 34.26,58.74 70.58,63.23 50.28,6.22 
                            44.76,-4.23 59.63,30.47 7.44,17.35 17.31,44.84 33.28,56.8 23.58,17.66 46.47,15.04 
                            70.59,1.44 3.89,-2.19 6.57,-3.13 10.47,-5.43 40.02,-23.72 36.96,-28.62 62.56,
                            -12.44 28.66,18.12 65.52,43.18 99.1,17.77 18,-13.61 25.29,-34.87 34.09,-54.67 
                            15.24,-34.27 8.66,-30.19 55.1,-33.66 22.05,-1.65 50.67,-6.74 63.7,-25.06 27.5,
                            -38.66 -0.02,-74.63 -0.02,-111.31 0,-6.3 17.48,-18.78 22.83,-23.54l15.27 
                            -13.88c12.21,-10.72 28.14,-29.5 28.14,-47.38 0,-15.35 -0.28,-22.74 -10.04,-37.65 
                            -16.33,-24.95 -56.2,-46.95 -56.2,-57.74 0,-29.21 36.31,-94.99 -15.46,-123.65 
                            -32.47,-17.97 -79.28,-8.82 -90.3,-19.66 -13.11,-12.91 -24.56,-91.19 -75.74,-91.19 
                            -22.12,0 -33.02,6.19 -50.76,16.8 -40.78,24.4 -36.92,27.17 -62.11,11.28 -6.65,-4.2 
                            -13.32,-8 -19.61,-12.18 -49.05,-32.65 -84.62,-17.79 -107.3,33.14 -4.19,9.41 
                            -12.62,31.12 -17.24,38.4 -6.97,10.97 -32.28,10 -45.02,10.63 -60.43,2.95 
                            -84.05,34.88 -71.86,87.71 1.77,7.66 3.61,15.3 5.32,22.51 1.86,7.87 4.25,14.32 
                            4.25,23.57z"
                    />
                    <path
                      d="M300.74 372.38c-22.4,-15 -49.21,-60.94 -74.19,-60.94 -14.77,0 -27.82,12.64 
                            -27.82,29.15 0,13.6 12.22,23.48 19.54,30.8l50.35 50.35c15.02,15.02 16.69,20.87 
                            37.43,20.87 10.43,0 20.18,-13.03 25.58,-19.46 7.2,-8.57 13.63,-15.83 20.6,-24.44 
                            3.4,-4.2 6.77,-7.86 10.37,-12.15l103.58 -124.29c9.05,-11.26 8.11,-11.48 8.11,
                            -25.01 0,-12.92 -26.1,-40.36 -51.99,-10.92 -2.14,2.43 -2.03,2.79 -4.06,5.21l-91.3 
                            108.75c-3.05,3.5 -6.32,7.48 -8.98,10.89 -5.48,7.05 -12.24,13.76 -17.22,21.2z"
                    />
                  </svg>
                  Favorable days:
                  <span className="daysInfo__text">{` ${favorableDates}`}</span>
                </h3>

                <h3 className="daysInfo__title">
                  <svg
                    className="daysInfo__icon"
                    width="22px"
                    height="22px"
                    fill="#EB7B2A"
                    viewBox="0 0 1261.43 1212.34"
                  >
                    <path
                      d="M1032.31 438.73c0,22.43 7.04,41.94 14.73,56.72 10.58,20.31 25.52,35.36 42.3,48.86l49.28 41.88c8.34,6.63 11.9,10.67 16.87,20.08 -8.7,16.44 -21.69,23.86 -35.11,36.33 -73.46,68.29 -108.27,80.57 -76.25,208.07 3.97,15.79 12.81,47.13 12.81,63.56 -86.76,20.22 -156.48,-4.26 -208.36,74.97 -20.63,31.48 -37.55,90.76 -55.26,117.21 -6.35,-3.05 -11.78,-4.58 -18.94,-8.16 -8.36,-4.16 -11.26,-6.39 -18.49,-11.07 -82.56,-53.45 -123.53,-74.14 -213.74,-22.53 -13.78,7.87 -60.17,38.71 -71.58,41.76 -22.05,-14.77 -30.09,-93.44 -81.86,-144.8 -40.76,-40.43 -107.78,-34.12 -158.96,-40.61 -6.18,-0.78 -17.92,-3.69 -25.26,-4.3 0,-80.59 57.91,-133.9 -4.21,-217.52 -20.22,-27.22 -37.81,-36.49 -56.76,-54.11 -12.05,-11.21 -28.87,-23.34 -37.58,-36.34 8.23,-35.34 123.19,-79.66 123.19,-167.53 0,-66.18 -24.64,-105.01 -24.64,-140.44 0,-16.99 128.9,-0.24 180.47,-46.19 41.64,-37.09 53.92,-97.85 80.69,-148.44 15.85,3.69 27.55,11.86 39.42,19.71 77.49,51.25 125.04,77.82 212.37,25.13 12.6,-7.6 24.7,-14.89 36.46,-22.67 8.63,-5.7 27.52,-18.72 39.42,-19.71 15.41,23.01 23.34,50.64 36.11,77.23 29.77,62.01 49.34,89.86 125.73,100.94 32.08,4.65 70.74,4.31 101.78,11.54 0,36.08 -24.63,88.24 -24.63,140.43zm-909.12 -4.92c0,34.19 -123.19,83.94 -123.19,165.07 0,47.06 11.38,58.07 35.88,89.76 8.85,11.45 33.16,29.8 42.36,38.95 41.16,40.94 52.77,27.93 37.56,88.1 -6.43,25.41 -17.25,63.55 -17.25,93.62 0,85.76 63.71,109.23 131.25,117.58 93.5,11.57 83.23,-7.86 110.88,56.66 13.83,32.27 32.19,83.4 61.89,105.64 43.86,32.85 86.42,27.98 131.28,2.67 7.23,-4.08 12.22,-5.81 19.46,-10.11 74.42,-44.11 68.74,-53.22 116.35,-23.13 53.3,33.69 121.83,80.3 184.29,33.05 33.47,-25.31 47.02,-64.84 63.4,-101.67 28.35,-63.72 16.11,-56.15 102.48,-62.59 41.01,-3.06 94.23,-12.54 118.46,-46.61 51.15,-71.89 -0.04,-138.79 -0.04,-207 0,-11.71 32.52,-34.91 42.46,-43.77l28.39 -25.81c22.71,-19.94 52.33,-54.85 52.33,-88.1 0,-28.55 -0.52,-42.28 -18.67,-70.01 -30.37,-46.4 -104.51,-87.31 -104.51,-107.38 0,-54.31 67.53,-176.65 -28.75,-229.94 -60.39,-33.42 -147.44,-16.4 -167.93,-36.56 -24.38,-24.01 -45.68,-169.58 -140.85,-169.58 -41.14,0 -61.42,11.51 -94.41,31.25 -75.84,45.38 -68.66,50.53 -115.49,20.97 -12.37,-7.81 -24.78,-14.88 -36.47,-22.66 -91.23,-60.71 -157.36,-33.07 -199.54,61.63 -7.8,17.51 -23.46,57.88 -32.07,71.41 -12.97,20.4 -60.02,18.61 -83.71,19.76 -112.38,5.49 -156.31,64.87 -133.63,163.11 3.28,14.24 6.71,28.46 9.88,41.85 3.46,14.64 7.91,26.64 7.91,43.84z"
                    />

                    <rect
                      transform="matrix(0.782514 0.622633 -6.22633E-001 0.782514 752.051 377.272)"
                      width="95.15"
                      height="509.33"
                    />
                    <rect
                      transform="matrix(-7.63442E-001 0.645876 -6.45876E-001 -7.63442E-001 831.518 769.864)"
                      width="95.15"
                      height="509.33"
                    />
                  </svg>
                  Unfavorable days:
                  <span className="daysInfo__text">{` ${unfavorableDates}`}</span>
                </h3>
              </div>
            </div>
            {isCropsListEmpty && (
              <div>
                <h2 className="moonCalendar__title">
                  We can't find any crops that are good to plant today. Maybe it's better to take a
                  day off.
                </h2>
                <img className="moonCalendar__picture" src="./images/dayoff.png" alt="" />
              </div>
            )}
            {!isCropsListEmpty && (
              <div>
                <h2 className="moonCalendar__title">Best to plant today:</h2>
                <div className="moonCalendar__planting">
                  {cropsList.map((item) => {
                    return <GardenCard key={item.id} url={item.url} name={item.name} />;
                  })}
                </div>
              </div>
            )}
          </div>

          {cropsArticle && (
            <article className="moon__article">
              <div className="article__image">
                <img src={crops[cropsArticle].url} alt="" />
              </div>
              <h2 className="article__title">{crops[cropsArticle].name}</h2>
              <p className="article__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat
                consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu.
                Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra,
                mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed.
                Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.
              </p>
              <button className="article__close"></button>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}

export default MoonCalendar;
