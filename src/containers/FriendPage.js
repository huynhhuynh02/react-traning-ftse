import React from 'react';
// import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';
class FriendPage extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Jumbotron>
                    <h1>Hello Contact Page</h1>
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


export default FriendPage;