import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form, Overlay, Tooltip, Spinner } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { Redirect, Link } from "react-router-dom";

import { firebase } from "./../../../App";
import admin from "./../../../resources/functions/admin-sdk-service-account";

import "./../../../styles/login/SignupForm.css"
import { country_list } from "./../../../resources/database/necessaryData";
import Logo from "./../../common/Logo";
import LoaderSpinner from "./../../common/LoaderSpinner";
export default function SignUpForm() {
  // Set loading button
  const [isLoading, setLoading] = useState(false);
  const [isSignedUpSuccessfully, login] = useState(false);
  const [isLocalUserIdValid, setLocalUserId] = useState(false);

  // Initialize hook form
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  // Catch value of these input onChange
  const firstName = watch("firstName", "");
  const lastName = watch("lastName", "");
  const password = watch("password", "");

  const onSubmit = data => {
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log("signedInUser", user);
        delete data.confirmPassword;
        data.postList = [];
        data.friendList = [];
        data.libraryList = [];
        data.messageList = [];
        data.inviteList = [];
        data.uid = user.uid;
        const firebaseDatabase = firebase.firestore();
        // Add document to Firestore
        firebaseDatabase.collection("users").add(data)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            localStorage.setItem("id", docRef.id);
            alert("Đăng ký tài khoản thành công!");
            setLoading(false);
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
              .then((userCredential) => {
                // Signed in
                let uid = userCredential.user.uid;
                localStorage.setItem("uid", uid);
                admin.auth().createCustomToken(uid).then((customToken) => {
                  localStorage.setItem("token", customToken);
                  localStorage.setItem("isLoggedIn", "true");
                  login(true);
                })
              })
              .catch((error) => {
                console.log("Error sign in: ", error);
                setLoading(false);
                alert("Đăng nhập thất bại, hãy thử lại sau!");
              });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            setLoading(false);
            alert("Đăng ký tài khoản thất bại!");
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode " + errorCode, errorMessage);
        switch (errorCode) {
          case "auth/email-already-in-use":
            alert("Email đã có người sử dụng ...");
            break;
          case "auth/invalid-email":
            alert("Email đã không đúng định dạng ...");
            break;
          default:
            alert("Đăng ký tài khoản thất bại!");
        }
        setLoading(false);
      });
  };
  const tooltipLastName = useRef(null);
  const tooltipGender = useRef(null);
  const tooltipEmail = useRef(null);
  const tooltipPassword = useRef(null);
  const tooltipPasswordComfirm = useRef(null);
  const tooltipFirstName = useRef(null);
  const tooltipCountry = useRef(null);
  let checkLocalUserId = setInterval(() => {
    if (localStorage.getItem("id") && localStorage.getItem("uid")) {
      setLocalUserId(true);
      clearTimeout(checkLocalUserId);
    }
  }, 500)
  return (
    isSignedUpSuccessfully ?
      isLocalUserIdValid ?
        <Redirect to="/" /> :
        <LoaderSpinner label="Đang đăng nhập..." /> :
      <Container fluid className="signup py-4">
        <Row className="mx-0 align-items-center">
          <Col xs={8} className="form-title">
            <span className="text-secondary font-weight-bold">Kết nối mọi người. Thêm bạn, thêm zui!!</span>
          </Col>
          <Col xs={4}>
            <Logo align="end" textVariant="secondary" />
          </Col>
        </Row>
        <Row className="mx-0">
          <Col xs={12}>
            <Form onSubmit={handleSubmit(onSubmit)} className="signup-form pt-3">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label className="text-secondary" ref={tooltipFirstName}>Họ:</Form.Label>
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
                  <Form.Label className="text-secondary" ref={tooltipLastName}>Tên:</Form.Label>
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
                  <Form.Label className="text-secondary" ref={tooltipGender}>Giới tính</Form.Label>
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
                  <Form.Label className="text-secondary" ref={tooltipEmail}>Địa chỉ email:</Form.Label>
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
                  <Form.Label className="text-secondary">Tên hiển thị:</Form.Label>
                  <Form.Control as="select" value={firstName + " " + lastName} {...register("displayName")}>
                    <option value={firstName + " " + lastName}>{firstName + " " + lastName}</option>
                    <option value={lastName + " " + firstName}>{lastName + " " + firstName}</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label className="text-secondary" ref={tooltipPassword}>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    autoComplete="off"
                    placeholder="Mật khẩu"
                    {...register("password", {
                      required: "Hãy nhập mật khẩu để bảo vệ tài khoản!",
                      minLength: { value: 6, message: "Mật khẩu phải từ 6 kí tự trở lên..." }
                    })} />
                  {errors.password && (
                    <Overlay target={tooltipPassword.current} show={true} placement="right">
                      {(props) => (
                        <Tooltip id="overlay-password" {...props}>
                          {errors.password.message}
                        </Tooltip>
                      )}
                    </Overlay>
                  )}
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="text-secondary" ref={tooltipPasswordComfirm}>Nhập lại mật khẩu</Form.Label>
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
                  <Form.Label className="text-secondary">Thành phố:</Form.Label>
                  <Form.Control type="text" placeholder="Thành phố" {...register("city")} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="text-secondary" ref={tooltipCountry}>Quốc tịch:</Form.Label>
                  <Form.Control as="select" placeholder="Quốc tịch" {...register("country", { required: true })}>
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
                  <Form.Label className="text-secondary">Một số thông tin bạn muốn chia sẻ:</Form.Label>
                  <Form.Control as="textarea" placeholder="Hãy để mọi người hiểu hơn về bạn ..." {...register("shareInfo")} />
                </Form.Group>
              </Form.Row>
              <Form.Row className="mt-1 justify-content-center">
                <Link to="/login" className="mr-4">
                  <Button
                    disabled={isLoading}
                    variant="secondary"
                    className="font-weight-bold px-5 w-auto"
                    type="button"
                  >
                    Trở lại đăng nhập
                  </Button>
                </Link>
                <Button
                  disabled={isLoading}
                  className="font-weight-bold px-5 w-auto"
                  type="submit"
                >
                  {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : "Đăng ký"}
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
  );
}