import Purchase from '../components/Purchase';
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/vinfast.css';
class WebPurchase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Purchase >
                </Purchase>
            </>

        );
    }
}


export default WebPurchase;