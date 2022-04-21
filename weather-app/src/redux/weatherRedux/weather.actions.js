import { FETCH_CLOUDY_WEATHER, FETCH_RAINY_WEATHER, FETCH_SUNNY_WEATHER, FETCH_SNOWY_WEATHER} from "./weather.actionTypes";

let sunnyWeather = ()  => {
    return {
        type:FETCH_SUNNY_WEATHER,
        payload:'sunny weather'
    }
}

let rainyWeather = ()  => {
    return {
        type:FETCH_RAINY_WEATHER,
        payload:'rainy weather'
    }
}

let cloudyWeather = ()  => {
    return {
        type:FETCH_CLOUDY_WEATHER,
        payload:'cloudy weather'
    }
}

let snowyWeather = ()  => {
    return {
        type:FETCH_SNOWY_WEATHER,
        payload:'snowy weather'
    }
}

export {sunnyWeather, rainyWeather,cloudyWeather,snowyWeather}