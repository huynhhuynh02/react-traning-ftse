import Muahang from '../components/Muahang';
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/vinfast.css';
class TrangMuahang extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Muahang >
                </Muahang>
            </>

        );
    }
}


export default TrangMuahang;