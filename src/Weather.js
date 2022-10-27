import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default class Weather extends Component {
  // let weatherDataParsed = this.props.weather.data.values();

  render() {
    let weatherDataParsed = this.props.weather.map((d, key) => (
     
      <Accordion className={key + 1} defaultActiveKey="0">
        <Accordion.Item eventKey = {d._id}key={d._id}>
          <Accordion.Header>Day {key + 1}</Accordion.Header>
          <Accordion.Body>
            {d.weather}
            
          </Accordion.Body>
          <Accordion.Body>
            {d.date}
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    
    ))
    return (
      <div>
        {weatherDataParsed}
      </div>
      

    )
  }
}

