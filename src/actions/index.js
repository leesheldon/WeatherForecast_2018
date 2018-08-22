import axios from "axios";

const API_KEY = "22ef2f299ccec2c6755d2fb68ddaf710";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	// Unit=Metric => temperature in Celsius
	const url = `${ROOT_URL}&q=${city}&units=metric`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
