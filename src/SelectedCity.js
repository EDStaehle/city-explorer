import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SelectedCity.css';

class SelectedCity extends React.Component{
  render(){
    return(
      <>
      <Form onSubmit={this.props.getCityData}>
        <Form.Group>
          <legend>Explore some cities!!</legend>
          <Form.Control
          className="form"
          type='text'
          onInput={this.props.handleInput}
          />
        </Form.Group>
        <Button 
        className='btn'
        type="submit">Submit</Button>

      </Form>
          <img className="img" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITYSELECTOR_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`} alt=''></img>
      {
        this.props.error? <p>{this.props.errorMessage}</p>: <p>{this.props.cityData.display_name}<br></br> Lon {this.props.cityData.lon}<br></br> Lat {this.props.cityData.lat}</p>
      }
      </>
    );
  }
}
export default SelectedCity;