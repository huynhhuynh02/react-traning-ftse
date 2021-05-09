import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "../../styles/RegisterPage.css";
import 'font-awesome/css/font-awesome.min.css';
import { auth, generateUserDocument } from "../../firebase";
class RegisterPage extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            phoneNumber:"",
            address:"",
            password:"",
            resetPassword : "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createUserWithEmailAndPasswordHandler = this.createUserWithEmailAndPasswordHandler.bind(this)
    }
    onChangeHandler(event) {
        const { name, value } = event.currentTarget;
    
        if (name === "userEmail") {
          this.setState({ email: value})
        } else if (name === "userPassword") {
            this.setState({ password: value})
        } else if (name === "address") {
            this.setState({ address: value})
        }
        else if (name === "phoneNumber") {
            this.setState({ phoneNumber: value})
        }
        else if (name === "resetPassword") {
            this.setState({ resetPassword: value})
        }
      };
      async createUserWithEmailAndPasswordHandler(event, email, password) {
        event.preventDefault();
        let address = this.state.address;
        let phoneNumber = this.state.phoneNumber;
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user);
        }
        catch(error){
          console.error('Error Signing up with email and password');
        }
          
        this.setState({email:""})
        this.setState({password:""})
        this.setState({resetPassword:""})
        this.setState({address:""})
        this.setState({phoneNumber:""})
      };
    render(){
        return(
            <>
                <div className="wrapper">
                <Container>
                    <Row >
                        <Col md={{offset: 3, span: 6}}>
                        <a id="back" href="#">Back</a>
                            <div class="form">
                                <p id="register-title">Register Indidual Account!</p>
                                        <p id="description">For the purpose of chatters regulation, your details are required.</p>
                                            <form class="register-form">
                                                <input type="email" placeholder="Email" name="userEmail" value={this.state.email} onChange={event => this.onChangeHandler(event) } required/>
                                                <input type="text" placeholder="Address" name="address" value={this.state.address} onChange={event => this.onChangeHandler(event) } required/>
                                                <input type="text" placeholder="Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={event => this.onChangeHandler(event) } required/>
                                                <input type="password" placeholder="Password" name="userPassword" value={this.state.password} onChange={event => this.onChangeHandler(event) } required/>
                                                <input type="password" placeholder="Reset password" name="resetPassword" value={this.state.resetPassword} onChange={event => this.onChangeHandler(event) } required/>
                                                           
                                                <button  onClick={event => {this.createUserWithEmailAndPasswordHandler(event, this.state.email, this.state.password);}}>Register</button>
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