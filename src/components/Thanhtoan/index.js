import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer } from 'react-bootstrap';
import LUXAM2Black from '../../images/LUXAM2Black.jpg';
class Thanhtoan extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Navbar className="backgroundblack" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="logovinchebrand" href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="navsanpham" id="responsive-navbar-nav">
                            <Nav>
                                <NavDropdown title="Sản Phẩm" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">VINFAST VF E34</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">VinFast Fadil</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">VinFast LUX A2.0</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">VinFast LUX SA2.0</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Ưu Đãi" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">GIÁ XE VINFAST ĐÀ NẴNG THÁNG 3</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">TRƯỚC BẠ 0 ĐỒNG</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">TRẢ GÓP LÃI SUẤT 0%</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link style={{ color: "white" }} href="#features">Tin tức</Nav.Link>
                                <Nav.Link style={{ color: "white" }} href="#pricing">Liên Hệ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-3">
                                    <p>Sản phẩm</p>
                                    <img className="imgsanpham" src={LUXAM2Black} />
                                </div>
                                <div className="col-3">
                                    <p>Giá</p>
                                    <span>1.179.000.000đ</span>
                                </div>
                                <div className="col-3">
                                    <p>Số lượng</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary">-</button>
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <p>Tạm tính</p>
                                    <p>1.179.000.000đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" id="col4boderleft">
                            <p className="bodergiohang">Cộng giỏ Hàng</p>
                            <div style={{ marginBottom: "10px" }} className="divabc d-flex justify-content-between bodergiohang">
                                <span>Tạm tính</span>
                                <span>1.179.000.000 ₫</span>
                            </div>
                            <div class="divcba d-flex justify-content-between">
                                <span>Tổng</span>
                                <span>1.179.000.000 ₫</span>
                            </div>
                            <button type="button" className="btn btn btn-warning tienhanhthanhtoan">Tiến hành thanh toán</button>
                        </div>
                    </div>
                </div>
                <iframe className="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.888360118527!2d108.22855031416988!3d16.071282043653355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182edbf1195d%3A0xdb17e7774aff026b!2zOTEwYSBOZ8O0IFF1eeG7gW4sIEFuIEjhuqNpIELhuq9jLCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1618313612873!5m2!1svi!2s" allowfullscreen="" loading="lazy"></iframe>
            </>
        )
    }
}
export default Thanhtoan;