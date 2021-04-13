import Thanhtoan from '../components/Thanhtoan';
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/vinfast.css';
class TrangThanhtoan extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Thanhtoan >
                </Thanhtoan>
            </>

        );
    }
}


export default TrangThanhtoan;