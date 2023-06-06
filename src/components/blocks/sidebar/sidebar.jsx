import { useState, useEffect } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar(location) {

  const [isActiveNews, setIsActiveNews] = useState(false);
  const [isActiveCalendar, setIsActiveCalendar] = useState(false);

  useEffect(() => {
    switch (location.location.location) {
      case "/news":
        setIsActiveNews(true);
        break;
      case "/moon-calendar":
        setIsActiveCalendar(true);
        break;
      default:
        navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  function goToWeather() {
    navigate("/weather");
    setIsActiveNews(false);
    setIsActiveCalendar(false);
  }

  function goToMoonCalendar() {
    navigate("/moon-calendar");
  }

  function goToNews() {
    navigate("/news");
  }

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo"></div>

        <div className="sidebar__nav">
          <button className="nav__item" onClick={goToWeather}>
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

          <button className="nav__item" onClick={goToMoonCalendar}>
            <svg
              className={`nav__icon ${isActiveCalendar ? "activeicon" : ""}`}
              fill="#FFFFFF"
              width="22px"
              height="22px"
              viewBox="0 0 433.542 433.543"
            >
              <g>
                <path
                  d="M216.771,0.001C97.054,0.001,0,97.049,0,216.769c0,119.727,97.054,216.773,216.771,216.773
                  c119.714,0,216.771-97.058,216.771-216.773C433.542,97.055,336.485,0.001,216.771,0.001z 
                  M253.039,399.714 c-11.734,2.316-23.86,3.551-36.268,3.551c-102.999,
                  0-186.497-83.491-186.497-186.496c0-102.997,83.498-186.494,186.497-186.494 c12.407,0,
                  24.533,1.239,36.268,3.554C167.395,50.704,102.8,126.182,102.8,216.769C102.8,307.363,167.395,
                  382.84,253.039,399.714z"
                />
              </g>
            </svg>
            <h1 className={`nav__title ${isActiveCalendar ? "activetitle" : ""}`}>Calendar</h1>
          </button>

          <button className="nav__item" onClick={goToNews}>
            <svg className={`nav__icon ${isActiveNews ? "activeicon" : ""}`} width="22" height="20">
              <path
                d="M20.1712 2.20375L18.3288 0.375L16.5 2.20375L14.6713 0.375L12.8425 2.20375L11 
                0.375L9.17125 2.20375L7.32875 0.375L5.5 2.20375L3.67125 0.375L1.82875 2.20375L0 
                0.375V17.5625C0 18.7038 0.92125 19.625 2.0625 19.625H19.9375C21.0788 19.625 22 18.7038 22 
                17.5625V0.375L20.1712 2.20375ZM19.9375 9.3125H2.0625V5.1875H19.9375V9.3125ZM12.0312 
                11.375H19.9375V13.4375H12.0312V11.375ZM2.0625 11.375H9.96875V17.5625H2.0625V11.375ZM12.0312 
                17.5625V15.5H19.9375V17.5625H12.0312Z"
              />
            </svg>
            <h1 className={`nav__title ${isActiveNews ? "activetitle" : ""}`}>News</h1>
          </button>

          <button className="nav__item">
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
  );
}

export default Sidebar;
