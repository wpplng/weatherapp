import React from 'react';

const WeatherReport = props => {
	const output = !props.errorMessage
		?
			(
				<div className="card bg-dark text-white">
					<div className="card-body text-center">
						<h5 className="card-title">The temperature in {props.city} is {props.report.main.temp} &deg; C right now, with a humidity of {props.report.main.humidity} %.</h5>
					</div>
				</div>
			)
		:
			<h1>That city doesn't exist, please enter another city</h1>

	return (
		<div id="WeatherReport">
			{output}
		</div>
	)
}

export default WeatherReport;
