import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return <Col xs={12} className="main-container">
          <React.Fragment>
          <Col xs={12} className="bg">
            <Col xs={4} className="inner-left"></Col>
            <Col xs={8}></Col>
          </Col>
          <Row className="top-container">
            <Col xs={12}> 
              <Col xs={{span:10, offset:1}} className="outer-box">
                  <Row>
                    <Col
                        xs={12}
                        sm={3}
                        className="d-none d-sm-block d-md-none d-lg-block left-block"
                      >
                      <Col xs={12} className="description">
                        <p className="text-center"><img src={require('./assets/images/logo.png')} /></p>
                        <h3 className="text-center"><i>CleanMyCar</i></h3>
                        <p className="text-center">India's first waterless car cleaning company</p>
                      </Col>
                    </Col>
                      {this.props.children}
                    </Row>
                </Col>
              </Col>
            </Row>
      </React.Fragment>
    </Col>;
  }
}

export default App;
