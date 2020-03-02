import React from 'react'

class WeatherConditions extends React.Component {
	render() {
		const conditions = this.props.weather.map(condition => {
			return condition.description
		})

		return(
			<div id="conditions">
				<p>Current weather is: {conditions.join('& ')} </p>
			</div>
		)
	}
}

export default WeatherConditions
