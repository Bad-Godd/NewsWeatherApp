import "./Pollution.css";
import * as Plot from "@observablehq/plot";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PlotFigure from "./plotfigure";
import Sidebar from "../../components/blocks/sidebar/sidebar";
import { getGeoLat, getGeoLon } from "./../../selectors/geoSelectors";
import { API_KEY } from "./../../apikey";

function Pollution(location) {
  const lat = useSelector(getGeoLat);
  const lon = useSelector(getGeoLon);

  const [pollutionData, setPollutionData] = useState([]);
  const [coData, setCoData] = useState([]);
  const [no2Data, setNo2Data] = useState([]);
  const [o3Data, setO3Data] = useState([]);
  const [pm2_5Data, setPm2_5Data] = useState([]);
  const [pm10Data, setPm10Data] = useState([]);
  const [so2, setSo2Data] = useState([]);


  // let end = Math.floor(Date.now() / 1000);
  // let start = end - 604800;

  // useEffect(() => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setPollutionData(data.list));
  // }, []);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setPollutionData(data.list));
      getCoData();
      getNo2Data();
      getO3Data();
      getPm2_5Data();
      getPm10Data();
      getSo2Data()
  }, []);

function getCoData() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.co;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setCoData(array);
  }

  function getNo2Data() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.no2;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setNo2Data(array);
  }

  function getO3Data() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.o3;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setO3Data(array);
  }

  function getPm2_5Data() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.pm2_5;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setPm2_5Data(array);
  }

  function getPm10Data() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.pm10;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setPm10Data(array);
  }

  function getSo2Data() {
    let array = [];
    if (pollutionData) {
      pollutionData.forEach((item, index) => {
        let obj = {};
        if (index % 20 === 0) {
          obj.co = item.components.so2;
          let date = new Date(item.dt * 1000);
          obj.dt = date.toLocaleDateString("default");
          array.push(obj);
        }
      });
    }
    setSo2Data(array);
  }

  return (
    <div className="page">
      <header>
        <Sidebar location={location} />
      </header>

      <main className="page__main">
        <h1 className="page__title">Air Pollution Forecast</h1>

        <div className="pollution__info">
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of CO, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(coData, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
                  ],
                }}
              />
            </div>
          </div>
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of O3, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(o3Data, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
                  ],
                }}
              />
            </div>
          </div>
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of PM2.5, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(pm2_5Data, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
                  ],
                }}
              />
            </div>
          </div>
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of PM10, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(pm10Data, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
                  ],
                }}
              />
            </div>
          </div>
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of	NO2, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(no2Data, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
                  ],
                }}
              />
            </div>
          </div>
          <div className="pollution__plot">
            <h3 className="pollution__name">Сoncentration of SO2, μg/m3</h3>
            <div>
              <PlotFigure
                options={{
                  marks: [
                    Plot.ruleY([0]),
                    Plot.lineY(so2, {
                      x: "dt",
                      y: "co",
                      marker: true,
                      stroke: "#8DBBFF",
                      strokeWidth: 3,
                    }),
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



  // function getCoData() {
  //   let array = [];
  //   if (pollutionData) {
  //     pollutionData.forEach((item, index) => {
  //       let obj = {};
  //       if (index % 25 === 0) {
  //         obj.co = item.components.co;
  //         let date = new Date(item.dt * 1000);
  //         obj.dt = date.toLocaleDateString("default");
  //         array.push(obj);
  //       }
  //     });
  //   }
  //   return array;
  // }

  // let coData = getCoData();
