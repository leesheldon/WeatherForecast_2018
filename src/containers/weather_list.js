import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temperatures = cityData.list.map(weaItem => weaItem.main.temp);
		const pressures = cityData.list.map(weaItem => weaItem.main.pressure);
		const humidities = cityData.list.map(weaItem => weaItem.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={cityName}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temperatures} color="orange" units="°C" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="blue" units="%" />
				</td>
				<td />
				<td />
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
	// { weather: state.weather } === { weather }
}

export default connect(mapStateToProps)(WeatherList);
