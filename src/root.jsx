// Copyright 2017 Quip

// function getWeatherReport(zipCode) {
// 	var apiKey = '6b98628d57d009c34b1b18644d38a2df'
// 	var apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/?units=imperial&zip=' + zipCode + '&appid=' + apiKey;
// 	return fetch(apiEndpoint)
// 	  .then((response) => response.json())
// 	  .then((responseJson) => {
// 	  	if(responseJson.cod != '200'){
// 	  		console.log("Error!" + responseJson.message);
// 	  	}

// 	    return responseJson;
// 	  })
// 	  .catch((error) => {
// 	    console.error(error);
// 	  });
// }

// class WeatherForecast extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       requestFailed: false
//     }
//   }

// 	getInitialState() {
// 	    return {cityList: {reading:[]}};
// 	}

//   componentDidMount() {
//   	var apiKey = '6b98628d57d009c34b1b18644d38a2df';
// 	var apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/?units=imperial&zip=' + this.props.zipCode + '&appid=' + apiKey;

//     fetch(apiEndpoint)
//       .then(response => {
//         if (!response.ok) {
//           throw Error("Network request failed")
//         }

//         return response
//       })
//       .then(d => d.json())
//       .then(d => {
// 		if(d.cod != '200'){
// 			throw Error(d.message);
// 		}
// 		console.log(d.list);
//         this.setState({
//           cityName: d.city.name,
//           cityList: [d.list]
//         })

//       }, () => {
//         this.setState({
//           requestFailed: true
//         })
//       })
//   }

//   render() {

//     if (this.state.requestFailed) return <p>Failed!</p>
//     // if (this.state.weatherData) return <p>Loading...</p>
//     return (
//     	<div>
// 	        <p>{this.state.cityName}</p>
// 	        <ul>
// 		        {this.state.cityList.map((reading) => {
// 		        	console.log(reading);
// 		        	// return <ForecastCard dt={result.dt}/>;
// 		        })}
// 	        </ul>
//         </div>
//     )
//   }
// }

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: [{ weather: [{}], main: {}, wind: {}}]
    }
  }

  componentDidMount() {
  	var apiKey = 'b1d9e085c28cc0b07ab8237469aa0947';
	var apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/?units=imperial&zip=' + this.props.zipCode + '&appid=' + apiKey;

    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
		if(d.cod != '200'){
			throw Error(d.message);
		}
		console.log(d.list);
        this.setState({
          cityName: d.city.name,
          weatherList: d.list
        })

      })
  }

  render() {
    return (
    	<div>
    		<p>{this.state.cityName}</p>
    		<ForecastCard weather={this.state.weatherList[0]}/>
        </div>
    )
  }
}

class ForecastCard extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		temp: 0.0,
    		chancePrecip: 0.0,
    		wind: 0.0,
    		date: '01/01/01'
    	};
    }
    render() {
    	return (
	    	<div className="weatherStats">
	    		{this.props.weather.dt}
	    		Temperature {this.state.temp}
	    		Precip {this.state.chancePrecip}%
	    		Wind {this.state.wind} mph
	    	</div>
    	)
    }
}

class WeatherIcon extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		iconCode: '01d'
    	};
    }
}

class Root extends React.Component {
    render() {
        return <WeatherForecast zipCode='95070'/>;
    }
}

quip.elements.initialize({
    initializationCallback: function(root) {
        ReactDOM.render(<Root/>, root);
    }
});