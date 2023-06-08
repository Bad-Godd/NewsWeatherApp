import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { getDayName, getMonthName, getDate } from './../../selectors/dateSelector';

import "./weather.css";

function Weather(location) {
  const API_KEY = "edd2105acc391569bc7ab493a69244db";

  const navigate = useNavigate();

  const day = useSelector(getDayName);
  const month = useSelector(getMonthName);
  const date = useSelector(getDate);

  // const [geoStatus, setGeoStatus] = useState(null);
  const [geoData, setGeoData] = useState(undefined);
  const [weatherData, setWeatherData] = useState({});

  const [weatherBlockHiddenState, setWeatherBlockHiddenState] = useState(false);
  const [weatherNavHiddenState, setWeatherNavHiddenState] = useState(true);
  const [calendarNavHiddenState, setCalendarNavHiddenState] = useState(true);
  const [newsNavHiddenState, setNewsNavHiddenState] = useState(true);
  const [mapsNavHiddenState, setMapsrNavHiddenState] = useState(true);
  const [logoState, setLogoState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);

  function hideWeatherBlock(url) {
    setWeatherBlockHiddenState(true);
    setLogoState(true);
    setTimeout(() => {
      setSidebarState(true);
    }, 1000);
    setTimeout(() => {
      setWeatherNavHiddenState(false);
    }, 2000);
    setTimeout(() => {
      setCalendarNavHiddenState(false);
    }, 2150);
    setTimeout(() => {
      setNewsNavHiddenState(false);
    }, 2300);
    setTimeout(() => {
      setMapsrNavHiddenState(false);
    }, 2450);
    setTimeout(() => {
      navigate(url);
    }, 2600);
  }

  function goToNews() {
    hideWeatherBlock('/news');
  }

  function goToCalendar() {
    hideWeatherBlock('/moon-calendar');
  }

  function goToMaps() {
    hideWeatherBlock('/maps');
  }

  const [isActiveWeather, setIsActiveWeather] = useState(false);

  useEffect(() => {
    if (location.location === '/weather') {
      setIsActiveWeather(true);
    }
  }, []);

  // useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         fetchGeo(position.coords.latitude, position.coords.longitude);
  //         fetchWeather(position.coords.latitude, position.coords.longitude);
  //       },
  //     );
  // }, []);

  async function fetchWeather(lat, lon) {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }

  async function fetchGeo(lat, lon) {
    await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setGeoData(data[0]));
  }

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setGeoStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setGeoStatus("Locating...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setGeoStatus(null);
  //         fetchGeo(position.coords.latitude, position.coords.longitude);
  //         fetchWeather(position.coords.latitude, position.coords.longitude);
  //       },
  //       () => {
  //         setGeoStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  return (
    <div className={`weather ${sidebarState ? "makeSmaller" : ""}`}>
      <div className="weather__container">
        <div
          className={`weather__left ${weatherBlockHiddenState ? "hidden" : ""}`}
        >
          <div className="weather__geo">
            <svg className="geo__pointer" width="19" height="24">
              <path
                d="M9.45002 0C14.6745 0 18.9 3.60195 18.9 8.05547C18.9 14.0971 9.45002 23.0156 9.45002 
                  23.0156C9.45002 23.0156 2.47955e-05 14.0971 2.47955e-05 8.05547C2.47955e-05 3.60195 4.22552 
                  0 9.45002 0ZM9.45002 10.9324C11.313 10.9324 12.825 9.64355 12.825 8.05547C12.825 6.46739 
                  11.313 5.17852 9.45002 5.17852C7.58702 5.17852 6.07502 6.46739 6.07502 8.05547C6.07502 
                  9.64355 7.58702 10.9324 9.45002 10.9324Z"
                fill="white"
              />
            </svg>
            <h1 className="geo__info">
              {geoData ? `${geoData?.name}, ${geoData?.country}` : "-"}
            </h1>
          </div>

          <h2 className="weather__date">
            {day} - {month} - {date}
          </h2>

          <div className="weather__block">
            <div className="weather__block_top">
              <span className="weather__temp">
                {weatherData.main
                  ? `${Math.ceil(weatherData?.main?.temp)}&deg`
                  : "-"}
                ;
              </span>

              <svg width="68" height="58">
                <path
                  d="M38.4268 19.9997C42.6605 19.9997 46.1021 23.1107 46.1021 26.9377C46.1021 27.9534 
                  45.8074 28.897 45.3714 29.7656C44.2846 29.8239 43.1609 29.971 41.939 30.2873C40.3395 
                  26.5325 37.0145 23.5852 32.8299 22.2254C34.2299 20.8655 36.2132 19.9997 38.4268 19.9997Z"
                  fill="#EFFF8D"
                />
                <path
                  d="M41.4969 4.7361L38.4268 13.0617L35.3566 4.7361C34.7917 3.20141 35.7066 1.5474 37.4013 
                  1.03676C39.0991 0.523348 40.932 1.35313 41.4969 2.88504C41.7272 3.51224 41.7118 4.15608 
                  41.4969 4.7361Z"
                  fill="#EFFF8D"
                />
                <path
                  d="M57.9651 13.2004L49.2797 17.1274L53.6239 9.27632C54.4253 7.83044 56.3686 7.24765 
                  57.9651 7.96643C59.5647 8.69075 60.2094 10.4475 59.4142 11.8933C59.0857 12.4817 58.573 
                  12.9257 57.9651 13.2004Z"
                  fill="#EFFF8D"
                />
                <path
                  d="M62.9879 29.7129L53.7775 26.9377L62.9879 24.1625C64.6856 23.6491 66.5154 24.4789 
                  67.0834 26.0135C67.6483 27.5454 66.7304 29.1995 65.0326 29.7129C64.3418 29.921 63.6295 
                  29.9044 62.9879 29.7129Z"
                  fill="#EFFF8D"
                />
                <path
                  d="M51.5547 30.662C51.9814 29.4853 52.2424 28.2448 52.2424 26.9377C52.2424 20.0524 
                  46.0438 14.4493 38.4268 14.4493C34.3128 14.4493 30.6378 16.0978 28.1203 18.6898L27.6813 
                  18.6121C22.2287 18.6121 17.338 20.7767 13.9608 24.193C13.224 23.971 12.5117 23.9543 
                  11.821 24.1625C10.1232 24.6759 9.2052 26.3299 9.7701 27.8618C9.9451 28.3253 10.2552 
                  28.6916 10.6205 29.0024C9.75168 30.9367 9.26046 33.0487 9.26046 35.2633L9.2666 
                  35.6129C3.97061 36.8479 0.0500488 41.1994 0.0500488 46.3641C0.0500488 52.4861 5.56095 
                  57.4648 12.3306 57.4648H46.1021C54.5665 57.4648 61.4528 51.2401 61.4528 43.5889C61.4528 
                  37.6805 57.3265 32.6574 51.5547 30.662ZM38.4268 19.9997C42.6605 19.9997 46.1021 23.1107 
                  46.1021 26.9377C46.1021 27.9534 45.8074 28.897 45.3714 29.7656C44.2846 29.8239 43.1609 
                  29.971 41.939 30.2873C40.3395 26.5325 37.0145 23.5852 32.8299 22.2254C34.2299 20.8655 
                  36.2132 19.9997 38.4268 19.9997ZM46.1021 51.9144H12.3306C8.94117 51.9144 6.19032 49.4251 
                  6.19032 46.3641C6.19032 43.303 8.94117 40.8137 12.0481 40.797L16.4139 40.8414L15.6525 
                  37.5056C15.4836 36.7757 15.4007 36.0181 15.4007 35.2633C15.4007 29.1412 20.9116 24.1625 
                  27.6813 24.1625L27.8931 24.1236C33.7387 24.2763 38.6233 28.0256 39.7039 33.1985L39.8206 
                  33.7147C40.1982 34.9247 41.4079 35.674 42.725 35.6906L43.6122 35.6268C44.5701 35.377 
                  45.3591 35.2633 46.1021 35.2633C51.1801 35.2633 55.3125 38.9987 55.3125 43.5889C55.3125 
                  48.179 51.1801 51.9144 46.1021 51.9144Z"
                  fill="#8DBBFF"
                />
                <path
                  d="M23.2296 9.27632L27.5738 17.1274L18.8884 13.2004C17.2889 12.4761 16.6411 10.7194 
                  17.4393 9.27632C18.2406 7.83044 20.1871 7.24765 21.7805 7.96643C22.4344 8.26337 22.9256 
                  8.72683 23.2296 9.27632Z"
                  fill="#EFFF8D"
                />
              </svg>
            </div>

            <div className="weather__block_bottom">
              <span className="weather__feeling">
                Real feel: {Math.ceil(weatherData?.main?.feels_like) || "-"}
              </span>

              <span className="weather__condition">
                {weatherData.weather ? weatherData.weather[0].main : "..."}
              </span>
            </div>
          </div>

          <div className="weather__info">
            <ul className="info__list">
              <li>Cloudiness</li>
              <li>Humidity</li>
              <li>Wind Speed</li>
              <li>Visibility</li>
              <li>Pressure</li>
            </ul>
            <ul className="info__list">
              <li>
                {weatherData.clouds ? `${weatherData.clouds.all} %` : "-"}
              </li>
              <li>
                {weatherData.main ? `${weatherData?.main?.humidity} %` : "-"}
              </li>
              <li>
                {weatherData.wind ? `${weatherData?.wind?.speed} m/s` : "-"}
              </li>
              <li>
                {weatherData.visibility ? `${weatherData?.visibility} m` : "-"}
              </li>
              <li>
                {weatherData.main ? `${weatherData?.main?.pressure} hPa` : "-"}
              </li>
            </ul>
          </div>

          <div className="weather__menu">
            <button className="menu__btn">
              <svg className={`menu__icon ${isActiveWeather ? "activeicon" : ""}`} width="30" height="30">
                <path
                  d="M18.75 27.5C18.06 27.5 17.5 26.9412 17.5 26.25V18.75C17.5 18.0588 18.06 17.5 
                18.75 17.5C19.44 17.5 20 18.0588 20 18.75V26.25C20 26.9412 19.44 27.5 18.75 27.5ZM11.25
                27.5C10.56 27.5 10 26.9412 10 26.25V18.75C10 18.0588 10.56 17.5 11.25 17.5C11.94 17.5 12.5 
                18.0588 12.5 18.75V26.25C12.5 26.9412 11.94 27.5 11.25 27.5ZM15 30C14.31 30 13.75 29.4412 
                13.75 28.75V21.25C13.75 20.5588 14.31 20 15 20C15.69 20 16.25 20.5588 16.25 21.25V28.75C16.25 
                29.4412 15.69 30 15 30ZM7.5 22.5C4.7425 22.5 2.5 20.2575 2.5 17.5C2.5 15.1738 4.09625 13.2138 
                6.25125 12.6575L6.25 12.5C6.25 8.36375 9.61375 5 13.75 5C16.9837 5 19.78 7.04875 20.8125 
                10.0188C24.4825 9.71375 27.5 12.66 27.5 16.25C27.5 19.0512 25.6162 21.5288 22.9175 
                22.2738C22.2487 22.4563 21.5637 22.0662 21.38 21.4025C21.1962 20.7375 21.5862 20.0488 22.2525 
                19.865C23.87 19.4175 25 17.9313 25 16.25C25 14.1825 23.3175 12.5 21.25 12.5C20.9475 12.5 
                20.6262 12.5513 20.2362 12.6625L18.8937 13.045L18.6625 11.6675C18.255 9.2525 16.19 7.5 13.75 
                7.5C10.9925 7.5 8.75 9.7425 8.75 12.5C8.75 12.84 8.78375 13.1812 8.8525 13.51L9.1625 
                15.0125L7.385 14.9925C6.12125 15 5 16.1212 5 17.5C5 18.8788 6.12125 20 7.5 20C8.19 20 8.75 
                20.5588 8.75 21.25C8.75 21.9412 8.19 22.5 7.5 22.5Z"
                />
              </svg>
            </button>

            <button className="menu__btn" onClick={goToCalendar}>
            <svg
              className="menu__icon"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1957.39 1958.32"
            >
              <path
                class="fil0"
                d="M526.05 1012.25c54.44,-14.44 17.33,61.55 103.59,84.01 37.37,9.73 75.84,-7.39 75.84,13.86 0,38.06 -23.42,3.12 -72.34,62.23 -41.17,49.74 9.38,104.96 -37.77,104.96 -15.05,0 -12.98,-15.81 -19.19,-29.73 -33.81,-75.78 -116.62,-54.57 -139.84,-59.98 -1.08,-12.63 0.05,-7.71 -4.08,-16.31 21.72,-24.99 58.06,-18.23 82.82,-68.06 21.72,-43.73 2.9,-56.36 10.97,-90.98zm309.92 -505.66c0,32.27 12.59,64.64 24.58,85.53 31.66,55.17 66.58,60.35 89.68,73.43 12.36,7 18.75,23.09 12.81,37.05 -21.26,49.97 -109.1,-41.19 -205.68,51.61 -43.03,41.35 -48.37,109.12 -89.57,75.52 -24.75,-20.18 0.99,-31 0.99,-94.78 0,-44.52 -22.54,-81.95 -45.84,-105.04 -58.29,-57.73 -80.58,-33.24 -80.58,-70.3 0,-47.95 54.19,-20.4 73.4,-20.4 55.33,0 96.38,-4.37 137.74,-45.76 40.07,-40.1 34.41,-80.65 66.16,-80.65 12.2,0 28.54,15.09 28.54,24.47 0,21.31 -12.23,47.91 -12.23,69.32zm371.09 -248.75c30.67,0 88.86,27.97 116.99,42.04l71.92 42.26c10.74,6.6 13.69,9.82 23.95,16.84 47.33,32.39 107.05,86.76 142.53,130.69 220.61,273.11 240.65,626.45 42.63,924.69 -12.74,19.2 -25.77,36.15 -40.37,53.41 -25.6,30.27 -65.62,71.07 -96.63,95.03 -58.99,45.59 -101.85,77.03 -175.43,110.03 -263.4,118.11 -547.15,82.91 -774.37,-85.98 -30.9,-22.97 -14.1,-42.31 -4.47,-56.71 68.52,0 127.97,1.37 187.03,-8.71 141.94,-24.25 261.76,-76.42 370.45,-167.84 10.52,-8.85 16.33,-17.33 26.87,-26.14 67.42,-56.37 128.4,-146.62 167.35,-224.12 59.99,-119.37 80.2,-220.3 80.2,-368.38 0,-105.53 -29.95,-194.98 -60.58,-269.72 -32.46,-79.18 -54.57,-100.37 -92.17,-156.7 -6.24,-9.35 -10.59,-16.72 -8.16,-28.12 2.28,-10.67 11.58,-22.57 22.26,-22.57zm-1207.06 689.16l0 73.41c0,202.91 113.9,480.57 257.89,622.93 11.23,11.1 19.44,19.37 30.62,30.55 167.26,167.26 414.65,284.43 657.56,284.43 170.61,0 311.02,-22.85 447.26,-91.02 191.03,-95.58 321.04,-210 432.28,-395.53 15.72,-26.22 26.76,-49.53 40.76,-77.51 68.31,-136.52 91.02,-276.31 91.02,-447.26 0,-96.28 -25.49,-212.21 -56.57,-298.2 -27.05,-74.83 -73.49,-168.66 -121.71,-233.07 -72.41,-96.72 -77.86,-99.36 -169.32,-185.45 -49.09,-46.21 -160.05,-110.1 -216.46,-138.32 -49.76,-24.9 -116.53,-47.21 -174.01,-62.52 -241.36,-64.26 -526.45,-20.44 -732.77,103.27 -26.4,15.83 -47.17,28.64 -72.27,45.98 -106.99,73.95 -218.65,194.22 -282.53,308.77 -15.04,26.97 -26.56,49.23 -40.73,77.53 -45.08,90.1 -91.02,248.8 -91.02,382.01z"
              />
            </svg>
            </button>

            <button className="menu__btn" onClick={goToNews}>
              <svg className="menu__icon" width="22" height="20">
                <path
                  d="M20.1712 2.20375L18.3288 0.375L16.5 2.20375L14.6713 0.375L12.8425 2.20375L11 
                0.375L9.17125 2.20375L7.32875 0.375L5.5 2.20375L3.67125 0.375L1.82875 2.20375L0 0.375V17.5625C0 
                18.7038 0.92125 19.625 2.0625 19.625H19.9375C21.0788 19.625 22 18.7038 22 17.5625V0.375L20.1712 
                2.20375ZM19.9375 9.3125H2.0625V5.1875H19.9375V9.3125ZM12.0312 
                11.375H19.9375V13.4375H12.0312V11.375ZM2.0625 11.375H9.96875V17.5625H2.0625V11.375ZM12.0312 
                17.5625V15.5H19.9375V17.5625H12.0312Z"
                />
              </svg>
            </button>

            <button className="menu__btn" onClick={hideWeatherBlock}>
              <svg className="menu__icon" width="14" height="20">
                <path
                  d="M7 0C10.87 0 14 3.13 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 3.13 3.13 0 7 0ZM7 
                9.5C8.38 9.5 9.5 8.38 9.5 7C9.5 5.62 8.38 4.5 7 4.5C5.62 4.5 4.5 5.62 4.5 7C4.5 8.38 5.62 
                9.5 7 9.5Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <div className={`weather__logo ${logoState ? "goRight" : ""}`}></div>
          <div className="sidebar__nav">
            <button className={`nav__item ${weatherNavHiddenState ? "hidden" : ""}`}>
              <svg className="nav__icon" width="30" height="30">
                <path
                  d="M18.75 27.5C18.06 27.5 17.5 26.9412 17.5 26.25V18.75C17.5 18.0588 18.06 17.5 18.75 
                17.5C19.44 17.5 20 18.0588 20 18.75V26.25C20 26.9412 19.44 27.5 18.75 27.5ZM11.25 
                27.5C10.56 27.5 10 26.9412 10 26.25V18.75C10 18.0588 10.56 17.5 11.25 17.5C11.94 17.5 12.5 
                18.0588 12.5 18.75V26.25C12.5 26.9412 11.94 27.5 11.25 27.5ZM15 30C14.31 30 13.75 29.4412 
                13.75 28.75V21.25C13.75 20.5588 14.31 20 15 20C15.69 20 16.25 20.5588 16.25 21.25V28.75C16.25 
                29.4412 15.69 30 15 30ZM7.5 22.5C4.7425 22.5 2.5 20.2575 2.5 17.5C2.5 15.1738 4.09625 13.2138 
                6.25125 12.6575L6.25 12.5C6.25 8.36375 9.61375 5 13.75 5C16.9837 5 19.78 7.04875 20.8125 
                10.0188C24.4825 9.71375 27.5 12.66 27.5 16.25C27.5 19.0512 25.6162 21.5288 22.9175 
                22.2738C22.2487 22.4563 21.5637 22.0662 21.38 21.4025C21.1962 20.7375 21.5862 20.0488 22.2525 
                19.865C23.87 19.4175 25 17.9313 25 16.25C25 14.1825 23.3175 12.5 21.25 12.5C20.9475 12.5 
                20.6262 12.5513 20.2362 12.6625L18.8937 13.045L18.6625 11.6675C18.255 9.2525 16.19 7.5 13.75 
                7.5C10.9925 7.5 8.75 9.7425 8.75 12.5C8.75 12.84 8.78375 13.1812 8.8525 13.51L9.1625 
                15.0125L7.385 14.9925C6.12125 15 5 16.1212 5 17.5C5 18.8788 6.12125 20 7.5 20C8.19 20 8.75 
                20.5588 8.75 21.25C8.75 21.9412 8.19 22.5 7.5 22.5Z"
                />
              </svg>
              <h1 className="nav__title">Weather</h1>
            </button>

            <button className={`nav__item ${calendarNavHiddenState ? "hidden" : ""}`}>
              <svg
              className={`nav__icon`}
              fill="#FFFFFF"
              width="22px"
              height="22px"
              viewBox="0 0 1957.39 1958.32"
            >
              <path
                class="fil0"
                d="M526.05 1012.25c54.44,-14.44 17.33,61.55 103.59,84.01 37.37,9.73 75.84,-7.39 75.84,13.86 0,38.06 -23.42,3.12 -72.34,62.23 -41.17,49.74 9.38,104.96 -37.77,104.96 -15.05,0 -12.98,-15.81 -19.19,-29.73 -33.81,-75.78 -116.62,-54.57 -139.84,-59.98 -1.08,-12.63 0.05,-7.71 -4.08,-16.31 21.72,-24.99 58.06,-18.23 82.82,-68.06 21.72,-43.73 2.9,-56.36 10.97,-90.98zm309.92 -505.66c0,32.27 12.59,64.64 24.58,85.53 31.66,55.17 66.58,60.35 89.68,73.43 12.36,7 18.75,23.09 12.81,37.05 -21.26,49.97 -109.1,-41.19 -205.68,51.61 -43.03,41.35 -48.37,109.12 -89.57,75.52 -24.75,-20.18 0.99,-31 0.99,-94.78 0,-44.52 -22.54,-81.95 -45.84,-105.04 -58.29,-57.73 -80.58,-33.24 -80.58,-70.3 0,-47.95 54.19,-20.4 73.4,-20.4 55.33,0 96.38,-4.37 137.74,-45.76 40.07,-40.1 34.41,-80.65 66.16,-80.65 12.2,0 28.54,15.09 28.54,24.47 0,21.31 -12.23,47.91 -12.23,69.32zm371.09 -248.75c30.67,0 88.86,27.97 116.99,42.04l71.92 42.26c10.74,6.6 13.69,9.82 23.95,16.84 47.33,32.39 107.05,86.76 142.53,130.69 220.61,273.11 240.65,626.45 42.63,924.69 -12.74,19.2 -25.77,36.15 -40.37,53.41 -25.6,30.27 -65.62,71.07 -96.63,95.03 -58.99,45.59 -101.85,77.03 -175.43,110.03 -263.4,118.11 -547.15,82.91 -774.37,-85.98 -30.9,-22.97 -14.1,-42.31 -4.47,-56.71 68.52,0 127.97,1.37 187.03,-8.71 141.94,-24.25 261.76,-76.42 370.45,-167.84 10.52,-8.85 16.33,-17.33 26.87,-26.14 67.42,-56.37 128.4,-146.62 167.35,-224.12 59.99,-119.37 80.2,-220.3 80.2,-368.38 0,-105.53 -29.95,-194.98 -60.58,-269.72 -32.46,-79.18 -54.57,-100.37 -92.17,-156.7 -6.24,-9.35 -10.59,-16.72 -8.16,-28.12 2.28,-10.67 11.58,-22.57 22.26,-22.57zm-1207.06 689.16l0 73.41c0,202.91 113.9,480.57 257.89,622.93 11.23,11.1 19.44,19.37 30.62,30.55 167.26,167.26 414.65,284.43 657.56,284.43 170.61,0 311.02,-22.85 447.26,-91.02 191.03,-95.58 321.04,-210 432.28,-395.53 15.72,-26.22 26.76,-49.53 40.76,-77.51 68.31,-136.52 91.02,-276.31 91.02,-447.26 0,-96.28 -25.49,-212.21 -56.57,-298.2 -27.05,-74.83 -73.49,-168.66 -121.71,-233.07 -72.41,-96.72 -77.86,-99.36 -169.32,-185.45 -49.09,-46.21 -160.05,-110.1 -216.46,-138.32 -49.76,-24.9 -116.53,-47.21 -174.01,-62.52 -241.36,-64.26 -526.45,-20.44 -732.77,103.27 -26.4,15.83 -47.17,28.64 -72.27,45.98 -106.99,73.95 -218.65,194.22 -282.53,308.77 -15.04,26.97 -26.56,49.23 -40.73,77.53 -45.08,90.1 -91.02,248.8 -91.02,382.01z"
              />
            </svg>
              <h1 className="nav__title">Calendar</h1>
            </button>

            <button className={`nav__item ${newsNavHiddenState ? "hidden" : ""}`}>
              <svg className={`nav__icon`} width="22" height="20">
                <path
                  d="M20.1712 2.20375L18.3288 0.375L16.5 2.20375L14.6713 0.375L12.8425 2.20375L11 
                0.375L9.17125 2.20375L7.32875 0.375L5.5 2.20375L3.67125 0.375L1.82875 2.20375L0 
                0.375V17.5625C0 18.7038 0.92125 19.625 2.0625 19.625H19.9375C21.0788 19.625 22 18.7038 22 
                17.5625V0.375L20.1712 2.20375ZM19.9375 9.3125H2.0625V5.1875H19.9375V9.3125ZM12.0312 
                11.375H19.9375V13.4375H12.0312V11.375ZM2.0625 11.375H9.96875V17.5625H2.0625V11.375ZM12.0312 
                17.5625V15.5H19.9375V17.5625H12.0312Z"
                />
              </svg>
              <h1 className={`nav__title`}>News</h1>
            </button>

            <button className={`nav__item ${mapsNavHiddenState ? "hidden" : ""}`}>
              <svg className="nav__icon" width="14" height="20">
                <path
                  d="M7 0C10.87 0 14 3.13 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 3.13 3.13 0 7 0ZM7 
                9.5C8.38 9.5 9.5 8.38 9.5 7C9.5 5.62 8.38 4.5 7 4.5C5.62 4.5 4.5 5.62 4.5 7C4.5 8.38 5.62 
                9.5 7 9.5Z"
                />
              </svg>
              <h1 className="nav__title">Maps</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;

// function fetchGeo(lat, lon) {
//   fetch(
//     `https://geocode-maps.yandex.ru/1.x/?apikey=${GEO_KEY}&format=json&geocode=${lat},${lon}`
//   )
//     .then((res) => res.json())
//     .then((data) => setGEO(data));
// }

// useEffect(() => {
//   if (!navigator.geolocation) {
//     setGeoStatus("Geolocation is not supported by your browser");
//   } else {
//     setGeoStatus("Locating...");
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setGeoStatus(null);
//         fetchGeo(position.coords.latitude, position.coords.longitude);
//         fetchWeather(position.coords.latitude, position.coords.longitude);
//       },
//       () => {
//         setGeoStatus("Unable to retrieve your location");
//       }
//     );
//   }
// }, []);
