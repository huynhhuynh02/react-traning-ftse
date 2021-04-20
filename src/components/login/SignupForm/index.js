import React, { useRef } from 'react';
import { Container, Row, Col, Button, Form, Overlay, Tooltip } from "react-bootstrap";
import { useForm } from 'react-hook-form';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"

import "./../../../styles/login/SignupForm.css"
import { country_list } from "./../../../resources/database/necessaryData";
import Logo from "./../../common/Logo";


export default function SignUpForm() {
  // Initialize hook form
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  // Catch value of these input onChange
  const firstName = watch("firstName", "");
  const lastName = watch("lastName", "");
  const password = watch("password", "");

  const onSubmit = data => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log("signedInUser", user);
        delete data.confirmPassword;
        const firebaseDatabase = firebase.firestore();
        // Add document to Firestore
        firebaseDatabase.collection("users").add(data)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Đăng ký tài khoản thành công!");
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode " + errorCode, errorMessage);
      });
  };
  const tooltipLastName = useRef(null);
  const tooltipGender = useRef(null);
  const tooltipEmail = useRef(null);
  const tooltipPassword = useRef(null);
  const tooltipPasswordComfirm = useRef(null);
  const tooltipFirstName = useRef(null);
  const tooltipCountry = useRef(null);

  return (
    <Container fluid className="signup py-4">
      <Row className="mx-0 align-items-center">
        <Col xs={8} className="form-title">
          <span className="text-light font-weight-bold">Kết nối mọi người. Thêm bạn, thêm zui!!</span>
        </Col>
        <Col xs={4}>
          <Logo align="end" />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col xs={12}>
          <Form onSubmit={handleSubmit(onSubmit)} className="signup-form pt-3">
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipFirstName}>Họ:</Form.Label>
                <Form.Control type="text" placeholder="Họ" {...register("firstName", { required: true, maxLength: 80, pattern: /[^0-9]/m })} />
                {errors.firstName && (
                  <Overlay target={tooltipFirstName.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-firstName" {...props}>
                        Hãy nhập đúng họ của bạn nha!
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipLastName}>Tên:</Form.Label>
                <Form.Control type="text" placeholder="Tên" {...register("lastName", { required: true, maxLength: 100, pattern: /[^0-9]/g })} />
                {errors.lastName && (
                  <Overlay target={tooltipLastName.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-lastName" {...props}>
                        Hãy nhập đúng tên của bạn nha!
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipGender}>Giới tính</Form.Label>
                <Form.Row className="mt-1 ml-1">
                  <Form.Check inline value="male" label="Nam" type="radio" name="gender" placeholder="Nam" {...register("gender", { required: true })} />
                  <Form.Check inline value="female" label="Nữ" type="radio" name="gender" placeholder="Nữ" {...register("gender", { required: true })} />
                </Form.Row>
                {errors.gender && (
                  <Overlay target={tooltipGender.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-gender" {...props}>
                        Chọn một trong hai đi nào!
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipEmail}>Địa chỉ email:</Form.Label>
                <Form.Control type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && (
                  <Overlay target={tooltipEmail.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-email" {...props}>
                        Địa chỉ email không khả dụng ...
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Tên hiển thị:</Form.Label>
                <Form.Control as="select" defaultValue={firstName + " " + lastName} {...register("displayName")}>
                  <option>{firstName + " " + lastName}</option>
                  <option>{lastName + " " + firstName}</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipPassword}>Mật khẩu</Form.Label>
                <Form.Control type="password" autoComplete="off" placeholder="Mật khẩu" {...register("password", { required: true, maxLength: 30 })} />
                {errors.password && (
                  <Overlay target={tooltipPassword.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-password" {...props}>
                        Hãy nhập mật khẩu để bảo vệ tài khoản!
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipPasswordComfirm}>Nhập lại mật khẩu</Form.Label>
                <Form.Control type="password" autoComplete="off" placeholder="Nhập lại mật khẩu" {...register("confirmPassword", { required: true, maxLength: 30, validate: value => value === password })} />
                {errors.confirmPassword && (
                  <Overlay target={tooltipPasswordComfirm.current} show={true} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-passwordConfirm" {...props}>
                        Mật khẩu nhập lại không trùng khớp ...
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Thành phố:</Form.Label>
                <Form.Control type="text" placeholder="Thành phố" {...register("city")} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label ref={tooltipCountry}>Quốc tịch:</Form.Label>
                <Form.Control as="select" placeholder="Quốc tịch" {...register("country")}>
                  {country_list.map((country, i) => {
                    return (<option key={i}>{country}</option>)
                  })}
                  {errors.country && (
                    <Overlay target={tooltipCountry.current} show={true} placement="right">
                      {(props) => (
                        <Tooltip id="overlay-country" {...props}>
                          Bạn là người nước nào nhỉ?
                        </Tooltip>
                      )}
                    </Overlay>
                  )}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Một số thông tin bạn muốn chia sẻ:</Form.Label>
                <Form.Control as="textarea" placeholder="Hãy để mọi người hiểu hơn về bạn ..." {...register("shareInfo")} />
              </Form.Group>
            </Form.Row>
            <Form.Row className="mt-1 justify-content-center">
              <Button className="font-weight-bold px-5 w-auto" type="submit">Đăng ký</Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}