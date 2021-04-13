import { React, useState } from 'react';
import { Form, Button, Col, InputGroup } from "react-bootstrap";

import "./../../../styles/login/SignupForm.css"
function SignUpForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="signup-form px-4 py-4">
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFirstname">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Tên của bạn"
                    />
                    <Form.Control.Feedback>Trông ổn rồi đó!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationLastname">
                    <Form.Label>Họ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Họ hoặc tên đệm của bạn"
                    />
                    <Form.Control.Feedback>Trông ổn rồi đó!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationUserId">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Tên đăng nhập vào Nista"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Hãy chọn một tên đăng nhập (dùng đăng nhập thay email).
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationEmail">
                    <Form.Label>Địa chỉ email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Có thể tuỳ chỉnh sau khi tạo tài khoản"
                            aria-describedby="inputGroupPrepend"
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Thành phố bạn đang sinh sống</Form.Label>
                    <Form.Control type="text" placeholder="Thành phố" required />
                    <Form.Control.Feedback type="invalid">
                        Hãy cho chúng tôi biết nơi bạn sinh sống, sẽ có nhiều bạn bè hơn đấy.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Quốc tịch</Form.Label>
                    <Form.Control type="text" placeholder="Quốc tịch" required />
                    <Form.Control.Feedback type="invalid">
                        Bạn là công dân nước nào nhỉ?
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Một chút thông tin về bạn</Form.Label>
                    <Form.Control type="text" placeholder="Để bạn bè hiểu rõ hơn về bạn" />
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Tôi đồng ý với các điều khoản của Nista"
                    feedback="You must agree before sign it up."
                />
            </Form.Group>
            <Button type="submit">Đăng ký</Button>
        </Form>
    );
}


export default SignUpForm;