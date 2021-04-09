import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "../../styles/LoginPage.css";
class LoginPage extends React.Component
{
    constructor(props){
        super(props);
        
    }
        
    render(){
        return(
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
                                          <input className="form-control"  type="email" placeholder="Email" required/>
                                        </div>
                                        
                                    </div>
                                    <div className="form-line">
                                        <span className="fontawesome-lock"></span>
                                        <div>
                                          <input className="form-control" type="password" placeholder="Password" required/>
                                        </div>
                                        
                                    </div>

                                    <input id="btnLogin" className="form-control" type="submit" value="Login"/>

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