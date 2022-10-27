import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Movies.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Movies extends Component {

  render() {
    let movieDataParsed = this.props.movies.map((mov) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${mov.img}`} />
              <Card.Body>
                <Card.Title>{mov.title}</Card.Title>
                <Card.Text>
                  {mov.overview}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    ))
    return (
      <Container id='contain' fluid>
      <Row id='row' xs={1} sm={1} md={2} lg={4} xxl={5} className='g-4'>
      { movieDataParsed }
      </Row>
      </Container>
    )
  }
}
