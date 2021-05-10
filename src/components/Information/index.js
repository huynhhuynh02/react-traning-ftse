import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer, Form, FormControl } from 'react-bootstrap';
import { FaCloudsmith, FaShareAlt } from "react-icons/fa";
import mercedesc18amg from '../../images/mercedesc18amg.jpg';
import Mercedesmaymoc from '../../images/Mercedesmaymoc.jpg';
import mercedesc18moi from '../../images/mercedesc18moi.jpg';
import C180amg2021 from '../../images/C180amg2021.jpg';
import noithat from '../../images/noithat.jpg';
import mercedesc190amg from '../../images/mercedesc190amg.jpg';
import Technicalspecifications from '../Technicalspecifications/index';
import SafetyTechnology from '../SafetyTechnology';
// retouer
import routes from '../../router/AppRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "",
        }
    }
    changeTab(value) {
        this.setState({ tab: value })
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <h3>
                                Mercedes C180 AMG
                            </h3>
                            <Button variant="outline-secondary"><FaCloudsmith /></Button>{' '}
                            <Button variant="outline-secondary"><FaShareAlt /> Chia Sẻ</Button>{' '}
                            <img className="imgmercedesc18amg" src={mercedesc18amg} />
                            <Navbar bg="dark" variant="dark">
                                <Nav className="mr-auto">
                                    <Nav.Link className="colorwhite" onClick={this.changeTab.bind(this, "")}>Nổi bật</Nav.Link>
                                    <Nav.Link className="colorwhite" onClick={this.changeTab.bind(this, <div><Technicalspecifications content1="
                                        4879 x 1854 x 1474 (mm)" content2="2874 (mm)" content3="1655/555 (kg)" content4="I4" content5="1991 (cc)" content6="6,7 (lít/100 km)" content7="80/9 (lít)" content8="300 Nm tại 1200 - 4000 vòng/phút" /></div>)}>Thông Số Kỹ Thuật
                                    </Nav.Link>
                                    <Nav.Link className="colorwhite" onClick={this.changeTab.bind(this, <div><SafetyTechnology /></div>)}>An Toàn và tiện nghi</Nav.Link>
                                </Nav>
                            </Navbar>
                            {this.state.tab}
                            {this.state.tab == "" ?
                                <>
                                    <h5 className="text-dark">MERCEDES C180 AMG 2021 giá tốt nhất tại MERCEDES PHÚ MỸ HƯNG</h5>
                                    <div className="hotline">
                                        <span>Website :<a href=""> mercedes-nguyenvanlinh.com</a></span>
                                        <span>Hotline : 0766437109</span>
                                    </div>
                                    <p>Tiếp tục mẫu xe thành công tại thị trường Việt nam trong vòng hơn 5 năm qua dòng xe Mercedes C-class đã khẳng định đẳng cấp của 1 dòng xe sang đến từ Đức cụ thể là Mercedes C class tính tới thời điểm hiện tại đã bán hơn 1.900.000 chiếc . Và đầu tháng 3/ 2019 vừa qua MBV đã tiếp tục cuộc hành trình với phương châm “ Never stop improving” tư duy sáng tạo cho việc thay đổi hơn 6500 chi tiết trong cả 3 mẫu xe tại thị trường Việt Nam.</p>
                                    <p>Giá xe Mercedes C180 AMG 2021 mới : 1 tỷ 499 triệu </p>
                                    <h4>Tính năng vận hành của Mercedes C180 AMG 2021 có gì nổi bật</h4>
                                    <p>Mercedes C180 AMG 2021 mới với kính thướt tương tự như phiên bản trước đây, tuy nhiên điểm đáng chú ý đó chính là phần động cơ. Dòng xe được sử dụng động cơ mới với dung tích 1,5 lít công suất 156 mã lực , hộp số tự động 9 cấp , sự dụng tăng áp Twin Scroll Turbo Charging giúp cho việc tăng tốc trở nên tốt rất nhiều bỏ đi sự trễ của hệ thống turbo thông thường khi tăng tốc.</p>
                                    <div className="mercedesmaymoc">
                                        <img className="wp-image-2947 aligncenter" src={Mercedesmaymoc} width="699" height="394" srcset="https://mercedes-nguyenvanlinh.com/wp-content/uploads/2018/12/Mercedes-C-mới-2019-300x169.jpg 300w, https://mercedes-nguyenvanlinh.com/wp-content/uploads/2018/12/Mercedes-C-mới-2019-768x432.jpg 768w, https://mercedes-nguyenvanlinh.com/wp-content/uploads/2018/12/Mercedes-C-mới-2019.jpg 1024w" sizes="(max-width: 699px) 100vw, 699px" />
                                    </div>
                                    <h5 className="mercedes2021">Mercedes C180 AMG 2021 nổi bật về thiết kế bên ngoài</h5>
                                    <p>Với những thay đổi mà chúng ta có thể thấy khi nhìn từ đằng trước hệ thống đèn chiếu sáng với cụm đèn Led liền kề kiểu dáng của Led High Performance mang lại cái nhìn hoàn toàn mới cho hệ thống chiếu sáng . Hãng xe đức đã cải tiến hiệu suất đèn tốt hơn giúp cho người lái có khả năng quan sát vào ban đêm trở nên an toàn hơn rất nhiều so với thế hệ trước đây .</p>
                                    <div className="mercedesc18moi">
                                        <img src={mercedesc18moi} />
                                    </div>
                                    <p>Mercedes C180 AMG 2021 vẫn có kích thướt chiều dài cơ sở giống với phiên bản trước tuy nhiên khi nhìn ở góc nghiêng tạo cho ta có cảm giác phần chiều dài ca pô được kéo dài hẵn ra . Với kiểu dáng khí động học vừa mềm mại uyển chuyển khi lái xe ở tốc độ thấp , vừa an toàn ổn định tuyệt đối khi chạy xe tốc độ cao .</p>
                                    <div className="C180amg2021">
                                        <img src={C180amg2021} />
                                    </div>
                                    <div className="noithat">
                                        <img src={noithat} />
                                    </div>
                                    <p>Khi bước vào trong xe các khách hàng tại Việt Nam lại một lần nữa có thể cảm nhận những tính năng tiện nghi nhất của dòng xe thế hệ mới điển hình tay lái được thiết kế thể thao hơn trang bị 2 nút cảm ứng trên vô lăng giúp lái xe và điều khiển dễ dàng hơn . Hệ thống Cruise control được tích hợp trên vô lăng thay thế cần điều khiển chức năng so với thế hệ trước đây. Với kiểu thiết kế hiện đại phá tan được phong cách truyền thống so với thế hệ trước đây </p>
                                    <div className="mercedesc190amg">
                                        <img src={mercedesc190amg} />
                                    </div>
                                </> :
                                <></>
                            }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Information;