import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedCity from './SelectedCity';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      
      
    }
  }
  handleInput = (event) => {
    event.preventDefault();
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
        error:false
      });

    }catch(error){
      this.setState({
        error:true,
        errorMessage: error.message
      })
    }
  }
 
  
  render(){
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
      <Footer
      
      />

      </>
    )
  }
}
export default App;
