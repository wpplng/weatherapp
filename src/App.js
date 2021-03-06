import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios'

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		inputCity: "",
		city: "",
	}

	handleChange = (e) => {
		this.setState({
			inputCity: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const city = this.state.inputCity
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`

		axios.get(url)
		.then(response => {
			this.setState({
				report: response.data,
				city: this.state.inputCity,
				inputCity: "",
				errorMessage: false
			})
		})
		.catch(err => {
			this.setState({
				city: this.state.inputCity,
				inputCity: "",
				errorMessage: true,
			})
		})
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity
						inputCity={this.state.inputCity}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>

					{
						this.state.report
						? (
							<WeatherReport
								errorMessage={this.state.errorMessage}
								city={this.state.city}
								report={this.state.report}
							/>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
