import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer } from 'react-bootstrap';
import LogoVinChe from '../../images/Logo-Vin-Che.png';
import Banner01min from '../../images/Banner01min.jpg';
import Banner02min from '../../images/Banner02min.jpg';
import Banner03min from '../../images/Banner03min.jpg';
import Img1 from '../../images/img1.jpg';
import Img2 from '../../images/img2.jpg';
import Img3 from '../../images/img3.jpg';
import vinfast from '../../videos/vinfast.mp4';
import logovinfast from '../../images/logovinfast.png';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
class Home1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Navbar className="backgroundblack" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="logovinchebrand" href="#home"><img src={LogoVinChe} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="navsanpham" id="responsive-navbar-nav">
                            <Nav>
                                <NavDropdown title="Sản Phẩm" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">VINFAST VF E34</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">VinFast Fadil</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">VinFast LUX A2.0</NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="#action/3.4">VinFast LUX SA2.0</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Ưu Đãi" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">GIÁ XE VINFAST ĐÀ NẴNG THÁNG 3</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">TRƯỚC BẠ 0 ĐỒNG</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">TRẢ GÓP LÃI SUẤT 0%</NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                </NavDropdown>
                                <Nav.Link style={{ color: "white" }} href="#features">Tin tức</Nav.Link>
                                <Nav.Link style={{ color: "white" }} href="#pricing">Liên Hệ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* carasoul */}
                {/* cach viet style */}
                {/* style={{color: "red", fontSize: "30px"}} */}
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Banner01min}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Banner02min}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner03min}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* row col */}
                <div className="sanphamvinfastvietnamtextaligncenter">SẢN PHẨM CỦA VINFAST VIỆT NAM</div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 text-center">
                            <img className="imghinhanhxe" src={Img1} />
                            <h2> {this.props.content}</h2>
                            <div className="contentsanpham">
                                <span>{this.props.content1}</span>
                                <span className="red">{this.props.giatiensanpham1}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content2} </span>
                                <span className="red">{this.props.giatiensanpham2}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content3}</span>
                                <span className="red">{this.props.giatiensanpham3}</span>
                            </div>
                            <button href="" className="btn btn-dark"><i className="fas fa-arrow-right"> Xem chi tiết</i></button>
                        </div>
                        {/* img2 */}
                        <div className="col-4 text-center">
                            <img className="imghinhanhxe" src={Img2} />
                            <h2> {this.props.content}</h2>
                            <div className="contentsanpham">
                                <span>{this.props.content1}</span>
                                <span className="red">{this.props.giatiensanpham1}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content2} </span>
                                <span className="red">{this.props.giatiensanpham2}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content3}</span>
                                <span className="red">{this.props.giatiensanpham3}</span>
                            </div>
                            <button href="" className="btn btn-dark"><i className="fas fa-arrow-right"> Xem chi tiết</i></button>
                        </div>
                        {/* img3 */}
                        <div className="col-4 text-center">
                            <img className="imghinhanhxe" src={Img3} />
                            <h2> {this.props.content}</h2>
                            <div className="contentsanpham">
                                <span>{this.props.content1}</span>
                                <span className="red">{this.props.giatiensanpham1}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content2} </span>
                                <span className="red">{this.props.giatiensanpham2}</span>
                            </div>
                            <div className="contentsanpham">
                                <span>{this.props.content3}</span>
                                <span className="red">{this.props.giatiensanpham3}</span>
                            </div>
                            <button href="" className="btn btn-dark"><i className="fas fa-arrow-right"> Xem chi tiết</i></button>
                        </div>
                    </div>
                </div>
                <video className="video" controls autoplay="1"
                    src={vinfast}>
                </video>
                {/* footer */}
                <footer class="abc">
                    <div className="footerbackground">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-4">
                                    <img className="logovinche" src={logovinfast} alt="" />
                                </div>
                                <div className="col-4" id="dichvukhachhang">
                                    <p style={{ textDecoration: "none", color: "white" }} className="h4">Thông tin liên hệ</p>
                                    <a style={{ textDecoration: "none", color: "white" }}>Địa chỉ </a>
                                    <a style={{ textDecoration: "none", color: "white" }}>: Số 01 Nguyễn Hanh, Phường Hoà Cường Nam, Quận
                            Hải Châu, Đà Nẵng</a><br></br>
                                    <a style={{ textDecoration: "none", color: "white" }} href="">Email: </a>
                                    <a style={{ textDecoration: "none", color: "white" }} href=""> Nguyenthien</a>
                                </div>
                                <div className="col-4" id="iconlienhekhachhangcenter">
                                    <p style={{ textDecoration: "none", color: "white" }}>LIKE & FOLLOW TRÊN MẠNG XÃ HỘI</p>
                                    <div className="iconcenter">
                                        <a style={{ textDecoration: "none", color: "white", padding: "10px" }} href="" target="_blank"><FaFacebookF /></a>
                                        <a style={{ textDecoration: "none", color: "white", padding: "10px" }} href="" target="_blank"><FaInstagram /></a>
                                        <a style={{ textDecoration: "none", color: "white", padding: "10px" }} href="" target="_blank"><FaYoutube /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}


export default Home1;