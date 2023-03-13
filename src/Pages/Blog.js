import React, { Component } from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

export default function Blog() {
  return (
    <Container>
      <Row>
        <Col md="9">
          <div class="d-flex align-items-center m-3">
            <div class="flex-shrink-3">
              <img
                width={150}
                height={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                esse cupiditate corrupti est eligendi
              </p>
            </div>
          </div>

          <div class="d-flex align-items-center m-3">
            <div class="flex-shrink-3">
              <img
                width={150}
                height={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                esse cupiditate corrupti est eligendi
              </p>
            </div>
          </div>

          <div class="d-flex align-items-center m-3">
            <div class="flex-shrink-3">
              <img
                width={150}
                height={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                esse cupiditate corrupti est eligendi
              </p>
            </div>
          </div>

          <div class="d-flex align-items-center m-3">
            <div class="flex-shrink-3">
              <img
                width={150}
                height={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                esse cupiditate corrupti est eligendi
              </p>
            </div>
          </div>
        </Col>
        <Col md="3" className="mt-4">
          <h5 className="text-center">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
