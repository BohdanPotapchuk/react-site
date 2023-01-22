import React, { Component } from 'react';
import { Card, Container, CardGroup, CardImg, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <CardGroup >
            <Card>
              <CardImg
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
              <CardImg
                variant='button'
                src='https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
            </Card>

            <Card >
              <CardImg
                variant='top'
                src='https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
