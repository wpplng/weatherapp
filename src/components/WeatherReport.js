import React from 'react';
import WeatherConditions from './WeatherConditions'

const WeatherReport = props => {
	const output = !props.errorMessage
		?
			(
				<div className="card bg-dark text-white">
					<div className="card-body text-center">
						<h5 className="card-title">The temperature in {props.city} is {props.report.main.temp} &deg; C right now, with a humidity of {props.report.main.humidity} %.</h5>
					</div>
					<WeatherConditions weather={props.report.weather} />
				</div>
			)
		:
			<div className="alert alert-warning" role="alert">The city "{props.city}" doesn't exist, please enter another city.</div>

	return (
		<div id="WeatherReport">
			{output}
		</div>
	)
}

export default WeatherReport;
