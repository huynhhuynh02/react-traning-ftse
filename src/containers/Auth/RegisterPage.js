import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';
class RegisterPage extends React.Component
{
    constructor(props){
        super(props);
        
    }
        
    render(){
        return(
            <>
                <Jumbotron>
                    <h1>Register Page</h1>
                </Jumbotron>
            </>
            
        );
    }
}


export default RegisterPage;