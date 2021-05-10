import React,{ useContext, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "../../styles/LoginPage.css";
import { auth, generateUserDocument } from "../../firebase";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      error:"",
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.signInWithEmailAndPasswordHandler = this.signInWithEmailAndPasswordHandler.bind(this);
  }
  onChangeHandler(event) {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      this.setState({ email: value})
    } else if (name === "userPassword") {
     this.setState({ password: value})
    }
  }


  signInWithEmailAndPasswordHandler(event,email,password)  {


    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
    this.setState({error:"Error signing in with password and email!"});
      console.error("Error signing in with password and email", error);
    });
  };
    render(){
      return (
        <div className="wrapper">
        <Container>
            <Row >
                <Col md={{offset: 3, span: 6}}>
                  <div className="logo">
                      <div className="title">
                          <h1 id="title">chat list</h1>
                      </div>
                      <div className="vector">
                              <svg width="150" height="130" viewBox="0 0 184 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <ellipse cx="91.9617" cy="84.4338" rx="91.9617" ry="84.4338" fill="#514EFF"/>
                              </svg>
                          </div>
                  </div>
                    <div className="form">
                        <form className="form-login">
                            <div className="form-line">
                                <span className="fontawesome-user"></span>
                                <div>
                                  <input className="form-control"  type="email"  name="userEmail" placeholder="Email" value={this.state.email} onChange = {(event) => this.onChangeHandler(event)} required/>
                                </div>
                                
                            </div>
                            <div className="form-line">
                                <span className="fontawesome-lock"></span>
                                <div>
                                  <input className="form-control" type="password"  name="userPassword" placeholder="Password" value={this.state.password} onChange = {(event) => this.onChangeHandler(event)} required/>
                                </div>
                                
                            </div>

                            <button id="btnLogin" className="form-control" onClick = {(event) => {this.signInWithEmailAndPasswordHandler(event, this.state.email, this.state.password)}}>
                                    LOGIN
                            </button>

                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
      );
    }
  }

export default LoginPage;