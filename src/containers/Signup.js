import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";

const initialUser = {
  email: "",
  password: "",
  confirmPassword: ""
};

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Submmited successfuly.");
    this.setState({
      user: { ...initialUser }
    });
  };

  render() {
    return (
      <Col xs={12} sm={9} className="form-container">
        <Col xs={12}>
          <h4 className="text-center title">Signup</h4>
        </Col>
        <Col xs={12}>
          <Col xs={12} sm={{ span: 8, offset: 2 }}>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col xs={12}>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      placeholder="Email"
                      onChange={this.onChange}
                      value={this.state.user.email}
                      name="email"
                      required
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      placeholder="Password"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.user.password}
                      name="password"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      placeholder="Confirm Password"
                      type="password"
                      onChange={this.onChange}
                      value={this.state.user.confirmPassword}
                      name="confirmPassword"
                      required
                    />
                  </FormGroup>
              </Col>
              <Col xs={12}>
                <Link to="/forgotpassword" className="pull-right" style={{opacity: 0,pointerEvents: 'none'}}>
                  Forgot Password?
                </Link>
              </Col>
              <Col xs={12}>
                <Button
                  variant="primary"
                  block
                  className="login-btn"
                  type="submit"
                >
                  Signup
                </Button>
              </Col>
              <Col xs={12} className="signup-link">
                <p className="text-center">
                  Already have account? <a href="javascript:void(0);" onClick={()=>window.history.back()}>Sign in</a>
                </p>
              </Col>
            </Row>
            </form>
          </Col>
        </Col>
      </Col>
    );
  }
}
