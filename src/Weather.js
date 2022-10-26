import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default class Weather extends Component {
  // let weatherDataParsed = this.props.weather.data.values();

  render() {
    let weatherDataParsed = this.props.weather.map((d,) => (
     
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey = {d._id}key={d._id}>
          
          {/* <Accordion.Header>{d.key}</Accordion.Header> */}
          <Accordion.Header>Day {d._id}</Accordion.Header>
          <Accordion.Body>
            {d.weather}
            
          </Accordion.Body>
          <Accordion.Body>
            {d.date}
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    
    ))
    console.log(this.props.weather);
    return (
      <div>

        {weatherDataParsed}
      </div>
      

    )
  }
}

