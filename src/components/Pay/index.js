import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer } from 'react-bootstrap';
import LUXAM2Black from '../../images/LUXAM2Black.jpg';
class Pay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
        this.addValue = this.addValue.bind(this);
        this.subtractValue = this.subtractValue.bind(this);
    }
    addValue() {
        this.setState({ value: this.state.value + 1 });
    }
    subtractValue() {
        this.setState({ value: this.state.value - 1 });
    }
    render() {
        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-3">
                                    <p>Sản phẩm</p>
                                    <img className="imgsanpham" src={LUXAM2Black} />
                                </div>
                                <div className="col-3">
                                    <p>Số lượng</p>
                                    {/* cachvietbuttonandinputtinhtoan */}
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary" onClick={this.subtractValue}>-</button>
                                        <input type="button" className="btn btn-secondary" id="valueButton" value={this.state.value} />
                                        <button type="button" className="btn btn-secondary" onClick={this.addValue}>+</button>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <p>Giá</p>
                                    <span>{(this.state.value * 1179000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"}</span>
                                </div>
                                <div className="col-3">
                                    <p>Tạm tính</p>
                                    <p>{(this.state.value * 1179000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" id="col4boderleft">
                            <p className="bodergiohang">Cộng giỏ Hàng</p>
                            <div style={{ marginBottom: "10px" }} className="divabc d-flex justify-content-between bodergiohang">
                                <span>Tạm tính</span>
                                <span>{(this.state.value * 1179000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"}</span>
                            </div>
                            <div class="divcba d-flex justify-content-between">
                                <span>Tổng</span>
                                <span>{(this.state.value * 1179000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"}</span>
                            </div>
                            <button type="button" className="btn btn btn-warning tienhanhthanhtoan">Tiến hành thanh toán</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Pay;