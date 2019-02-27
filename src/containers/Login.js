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
  password: ""
};

export default class Login extends Component {
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
          <h4 className="text-center title">Login</h4>
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
              </Col>
              <Col xs={12}>
                <Link to="/forgotpassword" className="pull-right">
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
                  Login
                </Button>
              </Col>
              <Col xs={12} className="signup-link">
                <p className="text-center">
                  Don't have account? <Link to="/signup">Sign up</Link>
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
