import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedCity from './SelectedCity';
import Weather from './Weather';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: '',
      weathererror: false,
      weathererrorMessage: '',
      weather: [],
      lat: '',
      lon: ''
      
    }
  }
  handleInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  getCityData = async (event) => {
    event.preventDefault();
    console.log(this.state.city);
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITYSELECTOR_API_KEY}&q=${this.state.city}&format=json`
      
      let cityData = await axios.get(url);
      console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        error:false,
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
      },this.getWeather);

    }catch(error){
      this.setState({
        error:true,
        errorMessage: error.message,
        
      })
    }
  }
 getWeather = async function(city){
  try {
    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${this.state.lat}&lon=${this.state.lon}`)
    this.setState({
      weathererror:false,
      weathererrorMessage: '',
      weather: weatherData.data,
    })
  } catch (error) {
    this.setState({
      weathererror:true,
      weathererrorMessage: error.message
    })
  }
 }
 render(){
    console.log(this.state.weather);
    return(
      <>
      
      <Header

      />

      <Main
      />
      <SelectedCity
      error={this.state.error}
      errorMessage={this.state.errorMessage}
      cityData={this.state.cityData}
      getCityData={this.getCityData}
      handleInput={this.handleInput}
      />
      {this.state.weather.length &&
      <Weather
      weather={this.state.weather}
      error={this.state.weathererror}
      errorMessage={this.state.weathererrorMessage}
      />
      }
      <Footer
      
      />

      </>
    )
  }
}
export default App;
