import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                 <Nav.Item>
                    <Nav.Link eventKey='first'>Design</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                    <Nav.Link eventKey='second'>Team</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                    <Nav.Link eventKey='third'>Frameworks</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                    <Nav.Link eventKey='fourth'>Libraries</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                    <Nav.Link eventKey='fifth'>Programing</Nav.Link>
                 </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                    <img src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif'/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                    <img src='https://www.codemotion.com/magazine/wp-content/uploads/2020/08/adults-analysis-brainstorming-1661004-896x504.jpg'/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                    <img src='https://www.deepcrawl.com/wp-content/uploads/2019/07/javascript-frameworks.png'/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                    <img src='https://wpdatatables.com/wp-content/uploads/2018/06/livechat-create-javascript-library-wide.jpg'/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                    <img src='https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png'/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id quod, qui labore enim odit, dignissimos nesciunt esse cupiditate corrupti est eligendi.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
