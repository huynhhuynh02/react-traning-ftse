import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import Home from '../components/Home';
import '../styles/vinfast.css';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Home>
                </Home>
            </>

        );
    }
}


export default HomePage;