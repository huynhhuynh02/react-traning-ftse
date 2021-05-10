import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel } from 'react-bootstrap';
// retouer
import routes from '../../router/AppRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class SafetyTechnology extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h4>An Toàn & Công Nghệ</h4>
                <Container>
                    <ul>
                        <li>Hệ thống treo êm ái DIRECT CONTROL</li>
                        <li>Hệ thống lái Direct-Steer trợ lực điện với trợ lực & tỉ số truyền lái biến thiên theo tốc độ giúp đem lại cảm giác lái tối ưu, hỗ trợ đánh lái thoải mái & chính xác</li>
                        <li>Cần số điều khiển điện DIRECT SELECT phía sau tay lái</li>
                        <li>Lẫy chuyển số bán tự động DIRECT SELECT phía sau tay lái</li>
                        <li>Cụm đèn trước LED toàn phần (Full-LED)</li>
                        <li>Đèn báo rẽ trên gương chiếu hậu, cụm đèn sau & đèn phanh thứ ba công nghệ LED</li>
                        <li>Gương chiếu hậu chống chói tự động; gương chiếu hậu bên ngoài chỉnh & gập điện</li>
                        <li>Chức năng ECO start/stop tự động ngắt động cơ khi xe tạm dừng; giúp giảm thiểu tiêu hao nhiêu liệu & khí xả</li>
                        <li>Hệ thống hỗ trợ đỗ xe chủ động Active parking assist tích hợp PARKTRONIC dò tìm không gian đỗ xe phù hợp; tự động điều khiển tay lái và phanh để đưa xe vào chỗ đỗ (cả trong trường hợp đỗ xe song song & đỗ xe vuông góc)</li>
                        <li>Chức năng cảnh báo mất tập trung ATTENTION ASSIST</li>
                        <li>Hệ thống chống bó cứng phanh ABS; Hỗ trợ lực phanh khẩn cấp BAS; Chống trượt khi tăng tốc ASR; Ổn định thân xe điện tử ESP</li>
                    </ul>
                </Container>
            </>
        )
    }
}



export default SafetyTechnology;