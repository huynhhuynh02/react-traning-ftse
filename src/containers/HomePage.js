import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import Home1 from '../components/Home1';
import '../styles/vinfast.css';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    s
    render() {
        return (
            <>
                <Home1 content="VINFAST FADIL" content1="Fadil Tiêu Chuẩn" content2="Fadil Nâng cao" content3="Fadil Cao cấp" giatiensanpham1=" 425.000.000đ" giatiensanpham2=" 625.000.000đ" giatiensanpham3=" 925.000.000đ" >
                </Home1>
            </>

        );
    }
}


export default HomePage;