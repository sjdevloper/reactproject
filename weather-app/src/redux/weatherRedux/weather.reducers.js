import {
  FETCH_CLOUDY_WEATHER,
  FETCH_RAINY_WEATHER,
  FETCH_SUNNY_WEATHER,
  FETCH_SNOWY_WEATHER,
} from "./weather.actionTypes";

export const WEATHER_KEY = "weatherStore";

let initialState = {
  data: "How is the weather",
};

let weatherReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case FETCH_SUNNY_WEATHER:
      return {
        data: "The Weather is Sunny",
      };

    case FETCH_RAINY_WEATHER:
      return {
        data: "The Weather is Rainy",
      };

    case FETCH_CLOUDY_WEATHER:
      return {
        data: "The Weather is Cloudy",
      };

    case FETCH_SNOWY_WEATHER:
      return {
        data: "The Weather is Snowy",
      }
      default: return state
  }
};

export {weatherReducer}