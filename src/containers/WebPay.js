import Pay from '../components/Pay';
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/vinfast.css';
class WebPay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Pay >
                </Pay>
            </>

        );
    }
}


export default WebPay;