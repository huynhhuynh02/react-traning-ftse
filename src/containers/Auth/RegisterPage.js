import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "../../styles/RegisterPage.css";
class RegisterPage extends React.Component
{
    constructor(props){
        super(props);
        
    }
        
    render(){
        return(
            <>
                <div className="wrapper">
                <Container>
                    <Row >
                        <Col md={{offset: 3, span: 6}}>
                        <div class="back">
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.8627 2.225L8.37936 0.75L0.137695 9L8.3877 17.25L9.8627 15.775L3.0877 9L9.8627 2.225Z" fill="#8692A6"/>
                            </svg>
                        
                        <a id="back" href="/">Back</a>
                        </div>
                            <div class="form">
                                <p id="register-title">Register Indidual Account!</p>
                                        <p id="description">For the purpose of chatters regulation, your details are required.</p>
                                            <form class="register-form">
                                                <input type="email" placeholder="Email" />
                                                    <input type="password" placeholder="Password" />
                                                        <input type="password" placeholder="Reset password" />
                                                            <label class="md-radio">I agree to terms & conditions
                                                                <input type="radio" name="radio" id="1" />
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                            <button>Register</button>
                                            </form>
                            </div>
                    </Col>
                    </Row>
                </Container>
                </div>    
            </>
            
        );
    }
}


export default RegisterPage;