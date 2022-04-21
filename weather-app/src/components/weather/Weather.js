import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sunnyWeather,rainyWeather,cloudyWeather,snowyWeather } from "../../redux/weatherRedux/weather.actions";

import { WEATHER_KEY } from "../../redux/weatherRedux/weather.reducers";

const Weather = () => {
    let dispatch = useDispatch()




  let viewData = useSelector((state) => {
    return state[WEATHER_KEY];
  });

  let clickSunny = () => {
    dispatch(sunnyWeather());
  };
  let clickRainy = () => {
    dispatch(rainyWeather());
  };
  let clickCloudy = () => {
    dispatch(cloudyWeather());
  };
  let clickSnowy = () => {
    dispatch(snowyWeather());
  };
  return (
    <React.Fragment>
      <div className="cotainer mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card text-center bg-light text-dark">
              <div className="card-header headerColor">
                <h2 className="font-weight-bold ">WEATHER APP</h2>
              </div>
              <div className="card-body bodyColor">
                <h3 className="font-weight-bold ">{viewData.data}</h3>
              </div>
              <div className="card-footer  ">
                <button
                  className="btn btn-sm btn-primary font-weight-bold "
                  onClick={clickSunny}
                >
                  Sunny
                </button>
                <button className="btn btn-sm btn-secondary font-weight-bold  " onClick={clickRainy}>
                  Rainy
                </button>
                <button className="btn btn-sm btn-warning font-weight-bold " onClick={clickCloudy}>
                  Cloudy
                </button>
                <button className="btn btn-sm btn-success font-weight-bold  " onClick={clickSnowy}>
                  Snowy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Weather;
