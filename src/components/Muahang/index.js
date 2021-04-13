import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer } from 'react-bootstrap';
import { FaYoutube } from "react-icons/fa";
import LUXMBlack from '../../images/LUXMBlack.jpg';
import LUXAM2red from '../../images/LUXAM2red.jpg';
import LUXAM2 from '../../images/LUXAM2.jpg';
import Baogiawebxe from '../../images/Baogiawebxe.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class Muahang extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="container py-5 d-flex">
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <a style={{ textDecoration: "none", color: "black" }} href="" target="_blank"><FaArrowLeft /></a>
                        <img className="widthluxam2" src={LUXMBlack} alt="" />
                        <a style={{ textDecoration: "none", color: "black" }} href="" target="_blank"><FaArrowRight /></a>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center">
                        <p style={{ textDecoration: "none", color: "black", fontsize: "30px", fontweight: "bold" }} >Trang chủ/Sản phẩm</p>
                        <a style={{ textDecoration: "none", color: "black" }} href="">VinFast LUX A2.0</a><br></br>
                        <a style={{ textDecoration: "none", color: "black" }} href="">1.179.000.000 ₫</a>
                        <div className="div">
                            <a style={{ textDecoration: "none", color: "black", margintop: "10px" }} href=""> Lux A2.0 là chiếc xe
                            tiềm năng
                            dành riêng cho những
                            khách hàng tinh tế. Từ đầu xe bề thế, đuôi xe vuốt về sau kiểu cổ điển đến vành và lốp xe lớn, tất
                            cả sự
                                khác biệt đã tạo nên một Lux A2.0 hài hoà. </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <img className="logovinfasthome" src={LUXMBlack} />
                        </div>
                        <div className="col-3">
                            <img className="logovinfasthome" src={LUXAM2red} />
                        </div>
                        <div className="col-3">
                            <img className="logovinfasthome" src={LUXAM2} />
                        </div>
                        <div  className="col-3">
                            <div className="btn-group btngroupsub" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-secondary border border-secondary buttonborder">-</button>
                                <button type="button" className="btn btn-secondary border border-secondary buttonborder">1</button>
                                <button type="button" className="btn btn-secondary border border-secondary buttonborder">+</button>
                                <button style={{ marginleft: "20px", height: "40px" }} type="button" className="btn btn-warning ">Mua Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <h4>Mô Tả</h4>
                    <div className="baogiawebxe">
                        <img src={Baogiawebxe} />
                    </div>
                </div>
            </>
        )
    }
}
export default Muahang;