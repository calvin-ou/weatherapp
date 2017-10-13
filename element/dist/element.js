/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var WeatherForecast = function (_React$Component) {
  _inherits(WeatherForecast, _React$Component);

  function WeatherForecast(props) {
    _classCallCheck(this, WeatherForecast);

    var _this = _possibleConstructorReturn(this, (WeatherForecast.__proto__ || Object.getPrototypeOf(WeatherForecast)).call(this, props));

    _this.state = {
      requestFailed: false
    };
    return _this;
  }

  _createClass(WeatherForecast, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return { data: { comments: [] } };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var apiKey = '6b98628d57d009c34b1b18644d38a2df';
      var apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/?units=imperial&zip=' + this.props.zipCode + '&appid=' + apiKey;

      fetch(apiEndpoint).then(function (response) {
        if (!response.ok) {
          throw Error("Network request failed");
        }

        return response;
      }).then(function (d) {
        return d.json();
      }).then(function (d) {
        if (d.cod != '200') {
          throw Error(d.message);
        }
        console.log(d.list);
        _this2.setState({
          cityName: d.city.name,
          cityList: d.list
        });
      }, function () {
        _this2.setState({
          requestFailed: true
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.requestFailed) return React.createElement(
        'p',
        null,
        'Failed!'
      );
      // if (this.state.weatherData) return <p>Loading...</p>
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          this.state.cityName
        ),
        React.createElement(
          'ul',
          null,
          this.state.cityList.map(function (list) {
            console.log(list);
            // return <ForecastCard dt={result.dt}/>;
          })
        )
      );
    }
  }]);

  return WeatherForecast;
}(React.Component);

var ForecastCard = function (_React$Component2) {
  _inherits(ForecastCard, _React$Component2);

  function ForecastCard(props) {
    _classCallCheck(this, ForecastCard);

    var _this3 = _possibleConstructorReturn(this, (ForecastCard.__proto__ || Object.getPrototypeOf(ForecastCard)).call(this, props));

    _this3.state = {
      temp: 0.0,
      chancePrecip: 0.0,
      wind: 0.0,
      date: '01/01/01'
    };
    return _this3;
  }

  _createClass(ForecastCard, [{
    key: 'render',
    value: function render() {
      React.createElement(
        'div',
        { className: 'weatherStats' },
        this.state.date,
        'Temperature ',
        this.state.temp,
        'Precip ',
        this.state.chancePrecip,
        '% Wind ',
        this.state.wind,
        ' mph'
      );
    }
  }]);

  return ForecastCard;
}(React.Component);

var WeatherIcon = function (_React$Component3) {
  _inherits(WeatherIcon, _React$Component3);

  function WeatherIcon(props) {
    _classCallCheck(this, WeatherIcon);

    var _this4 = _possibleConstructorReturn(this, (WeatherIcon.__proto__ || Object.getPrototypeOf(WeatherIcon)).call(this, props));

    _this4.state = {
      iconCode: '01d'
    };
    return _this4;
  }

  return WeatherIcon;
}(React.Component);

var Root = function (_React$Component4) {
  _inherits(Root, _React$Component4);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return React.createElement(WeatherForecast, { zipCode: '95070' });
    }
  }]);

  return Root;
}(React.Component);

quip.elements.initialize({
  initializationCallback: function initializationCallback(root) {
    ReactDOM.render(React.createElement(Root, null), root);
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=element.js.map