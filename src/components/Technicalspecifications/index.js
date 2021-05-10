import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer, Form, FormControl } from 'react-bootstrap';
import { FaSearch, FaRegClock } from "react-icons/fa";
import { FaCarSide, FaPeace, FaRecycle } from "react-icons/fa";

// retouer
import routes from '../../router/AppRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Technicalspecifications extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Container>
                    <Nav.Link href=""><a style={{ textDecoration: "none", color: "black", }} href="" target="_blank"><FaCarSide /></a> Thiết kế</Nav.Link>
                    <Row>
                        <Col className="boderbottom" xs={8}>
                            <p>DXRXC</p>
                        </Col>
                        <Col className="boderbottom cotentboder" xs={4}>
                            <p>{this.props.content1}</p>
                        </Col>
                        <Col className="boderbottom" xs={9}>
                            <p >CHIỀU DÀI CƠ SỞ</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content2}</p>
                        </Col>
                        <Col className="boderbottom" xs={9}>
                            <p >TỰ TRỌNG/TẢI TRỌNG</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content3}</p>
                        </Col>
                    </Row>
                    <Nav.Link href=""><a style={{ textDecoration: "none", color: "black", }} href="" target="_blank"><FaPeace /></a> Động Cơ</Nav.Link>
                    <Row>
                        <Col className="boderbottom" xs={9}>
                            <p >ĐỘNG CƠ	</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content4}</p>
                        </Col>
                        <Col className="boderbottom" xs={9}>
                            <p >DUNG TÍCH CÔNG TÁC	</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content5}</p>
                        </Col>
                        <Col className="boderbottom" xs={9}>
                            <p>ĐỘNG CƠ	I4</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content6}</p>
                        </Col>
                    </Row>
                    <Nav.Link href=""><a style={{ textDecoration: "none", color: "black", }} href="" target="_blank"><FaRecycle /></a> Công Suất</Nav.Link>
                    <Row>
                        <Col className="boderbottom" xs={9}>
                            <p>CÔNG SUẤT CỰC ĐẠI</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content7}</p>
                        </Col>
                        <Col className="boderbottom" xs={9}>
                            <p >MÔ-MEN XOẮN CỰC ĐẠI</p>
                        </Col>
                        <Col className="boderbottom" xs={3}>
                            <p >{this.props.content8}</p>
                        </Col>
                    </Row>
                    <p className="contenttrenulli">VÌ SAO CHỌN XE MERCEDES PHÚ MỸ HƯNG ?</p>
                    <ul>
                        <li>Xe được bảo hành 3 năm , không giới hạn km.</li>
                        <li>Xe được kiểm tra đầy đủ – an toàn.</li>
                        <li>Sẵn sàng thu lại Mercedes cũ đổi lại xe Mercedes mới cho khách hàng với giá trị thu lại cao.</li>
                    </ul>
                </Container>

            </>
        )
    }
}


export default Technicalspecifications;