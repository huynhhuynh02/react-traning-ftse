import React from 'react';
import { Form, Button } from "react-bootstrap";

import "./../../../styles/login/LoginForm.css"
import Logo from "./../../common/Logo";
class LoginForm extends React.Component {
    render() {
        return (
            <Form className="login-form d-flex flex-column px-3 py-3">
                <Logo />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-light font-weight-bold">Địa chỉ email/Tên đăng nhập</Form.Label>
                    <Form.Control type="email" placeholder="Nhập địa chỉ email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-light font-weight-bold">Mật khấu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check className="text-light" type="checkbox" label="Tự động đăng nhập" />
                </Form.Group>
                <div className="py-2 text-light">
                    Bạn chưa có tài khoản, <span className="sign-up-button text-primary">đăng ký</span> ngay
                </div>
                <Button variant="primary">
                    Đăng nhập
                </Button>
            </Form>
        );
    }
}


export default LoginForm;