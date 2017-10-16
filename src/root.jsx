class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
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

        this.setState({
          cityName: d.city.name,
          weatherList: d.list
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.weatherList.length > 1 ?
          <div className="weatherForecast">
              <h2>Weather Forecast for {this.state.cityName}</h2>
              <ForecastCard forecast={this.state.weatherList[2]}/>
              <ForecastCard forecast={this.state.weatherList[10]}/>
              <ForecastCard forecast={this.state.weatherList[18]}/>
              <ForecastCard forecast={this.state.weatherList[26]}/>
              <ForecastCard forecast={this.state.weatherList[34]}/>
            </div>
            : <p>Loading...</p>
          }
        </div>
    )
  }
}

class ForecastCard extends React.Component {
    render() {
      return (
        <div className="forecastCard">
          <p>{this.props.forecast.dt_txt}</p>
          <ForecastIcon iconCode={this.props.forecast.weather[0].icon}/>
          <p>{this.props.forecast.main.temp}&#176; F</p>
          <p>{this.props.forecast.wind.speed} mph</p>
        </div>
      )
    }
}

class ForecastIcon extends React.Component {
  render(){
    var imageSource = '/weatherIcons/' + this.props.iconCode + '.png';
    return (
      <img src={imageSource}></img>
    )
  }
}

quip.elements.initialize({
    initializationCallback: function(root) {
        ReactDOM.render(<WeatherForecast zipCode='95070'/>, root);
    }
});