import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';
class AboutPage extends React.Component
{
    constructor(props){
        super(props);
        this.setState({
            isLogin:true
        });
    }
        
    render(){
        return(
            <>
                <Jumbotron>
                    <h1>Hello About Page</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </>
            
        );
    }
}


export default AboutPage;