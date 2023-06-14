import "./Pollution.css";
import * as Plot from "@observablehq/plot";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as d3 from "d3";

import PlotFigure from "./plotfigure";
import Sidebar from "../../components/blocks/sidebar/sidebar";
import { getGeoLat, getGeoLon } from "./../../selectors/geoSelectors";
import { APIWEATHER_KEY } from "../../apikeys";

function Pollution(location) {
  const lat = useSelector(getGeoLat);
  const lon = useSelector(getGeoLon);

  const [pollutionData, setPollutionData] = useState([]);
  const [coData, setCoData] = useState([]);
  const [isCoData, setIsCoData] = useState(false);
  const [o3Data, setO3Data] = useState([]);
  const [pm10Data, setPm10Data] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${APIWEATHER_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setPollutionData(data.list));
  // });

  useEffect(() => {
    if (pollutionData !== []) {
      let array = [];
      pollutionData.forEach((item, index) => {
        let obj = {};
        // if (index % 20 === 0) {
          obj.co = item.components.co;
          obj.dt = new Date(item.dt * 1000);
          array.push(obj);
        // }
      });
      setCoData(array);
    }
  }, [pollutionData]);

  useEffect(() => {
    if (pollutionData !== []) {
      let array = [];
      pollutionData.forEach((item, index) => {
        let obj = {};
        // if (index % 24 === 0) {
          obj.co = item.components.o3;
          obj.dt = new Date(item.dt * 1000);
          array.push(obj);
        // }
      });
      setO3Data(array);
    }
  }, [pollutionData]);

  useEffect(() => {
    if (pollutionData !== []) {
      let array = [];
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 24 === 0) {
          obj.co = item.components.pm10;
          obj.dt = new Date(item.dt * 1000);
          array.push(obj);
        }
      });
      setPm10Data(array);
    }
  }, [pollutionData]);

  return (
    <div className="page">
      <header>
        <Sidebar location={location} />
      </header>

      <main className="page__main">
        <h1 className="page__title">Air Pollution Forecast</h1>

        <div className="pollution">
  
          <div className="pollution__plotblock">
            <h3 className="pollution__title">Сoncentration of CO</h3>
            <p className="pollution__text">
              Carbon monoxide pollution data for your coordinates, μg/m3
            </p>
            <img className="plot__legend" src="./images/icons/co.png" alt="legend" />
            
              <div className="pollution__plot">
                <PlotFigure
                  options={{
                    width: 320,
                    height: 200,
                      x: { label: null },
                      y: { label: null },
                      color: {
                        scheme: "BuRd"
                      },
                    marks: [
                      Plot.ruleY([4400], { stroke: "#6EE7B7"}),
                      Plot.ruleY([0]),
                      Plot.auto(coData, { x: "dt", y: "co", stroke: "#007155"})
                    ]
                }}
                />
                {/* <PlotFigure
                  options={{
                    width: 320,
                    x: { label: null },
                    y: { label: null },
                    marks: [
                      Plot.ruleY([0]),
                      Plot.barY(coData, { x: "dt", y: "co", fill: "#6EE7B7" }),
                      Plot.axisX({
                        fontSize: 12,
                        tickFormat: (
                          (formatDay, formatMonth) => (x) =>
                            `${formatDay(x)} ${formatMonth(x)}`
                        )(d3.utcFormat("%d"), d3.utcFormat("%b")),
                      }),
                      Plot.axisY({ fontSize: 12 }),
                    ],
                  }}
                /> */}
              </div>
            
          </div>
          <div className="pollution__plotblock">
            <h3 className="pollution__title">Сoncentration of O3</h3>
            <p className="pollution__text">
              Ozone pollution data for your coordinates, μg/m3
            </p>
            <img className="plot__legend" src="./images/icons/o3.png" alt="legend" />

              <div className="pollution__plot">
              <PlotFigure
                  options={{
                    width: 320,
                    height: 200,
                      x: { label: null },
                      y: { label: null },
                      color: {
                        scheme: "BuRd"
                      },
                    marks: [
                      Plot.ruleY([60], { stroke: "#007155"}),
                      Plot.ruleY([0]),
                      Plot.areaY(o3Data, { x: "dt", y: "co", fill: "#6EE7B7"}),
                      // Plot.auto(o3Data, { x: "dt", y: "co", stroke: "#007155"})
                    ]
                }}
                />
                {/* <PlotFigure
                  options={{
                    width: 320,
                    x: { label: null },
                    y: { label: null },
                    marks: [
                      Plot.ruleY([0]),
                      Plot.barY(o3Data, { x: "dt", y: "co", fill: "#6EE7B7" }),
                      Plot.axisX({
                        fontSize: 12,
                        tickFormat: (
                          (formatDay, formatMonth) => (x) =>
                            `${formatDay(x)} ${formatMonth(x)}`
                        )(d3.utcFormat("%d"), d3.utcFormat("%b")),
                      }),
                      Plot.axisY({ fontSize: 12 }),
                    ],
                  }}
                /> */}
              </div>
          </div>
          <div className="pollution__plotblock">
            <h3 className="pollution__title">Сoncentration of PM10</h3>
            <p className="pollution__text">
              Coarse particulate matter pollution data for your coordinates, μg/m3
            </p>
            <img className="plot__legend" src="./images/icons/pm10.png" alt="legend" />

              <div className="pollution__plot">
                <PlotFigure
                  options={{
                    width: 320,
                    x: { label: null },
                    y: { label: null },
                    marks: [
                      Plot.ruleY([0]),
                      Plot.barY(pm10Data, { x: "dt", y: "co", fill: "#6EE7B7" }),
                      Plot.axisX({
                        fontSize: 12,
                        tickFormat: (
                          (formatDay, formatMonth) => (x) =>
                            `${formatDay(x)} ${formatMonth(x)}`
                        )(d3.utcFormat("%d"), d3.utcFormat("%b")),
                      }),
                      Plot.axisY({ fontSize: 12 }),
                    ],
                  }}
                />
              </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Pollution;

// let end = Math.floor(Date.now() / 1000);
// let start = end - 604800;

// useEffect(() => {
//   fetch(
//     `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${API_KEY}`
//   )
//     .then((res) => res.json())
//     .then((data) => setPollutionData(data.list));
// }, []);
