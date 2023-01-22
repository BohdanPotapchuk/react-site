import React, { Component } from 'react';
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <div class='d-flex align-items-center m-3'>
              <div class='flex-shrink-3'>
                <img
                  width={150}
                  height={150}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                />
              </div>
              <div class='flex-grow-1 ms-3'>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </p>
              </div>
            </div>
          </Col>

          <Col md='9'>
            <div class='d-flex align-items-center m-3'>
              <div class='flex-shrink-3'>
                <img
                  width={150}
                  height={150}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                />
              </div>
              <div class='flex-grow-1 ms-3'>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </p>
              </div>
            </div>
          </Col>

          <Col md='9'>
            <div class='d-flex align-items-center m-3'>
              <div class='flex-shrink-3'>
                <img
                  width={150}
                  height={150}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                />
              </div>
              <div class='flex-grow-1 ms-3'>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit,
                  dignissimos nesciunt esse cupiditate corrupti est eligendi
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
