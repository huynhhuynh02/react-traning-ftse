import React, { useState } from 'react';
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import {
    Link,
    Redirect
} from "react-router-dom";

import { firebase } from "./../../../App";
import admin from "./../../../resources/functions/admin-sdk-service-account";

import "./../../../styles/login/LoginForm.css"
import Logo from "./../../common/Logo";

export default function LoginForm() {
    const [isLoading, setLoading] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isErrored, showErrMes] = useState(false)
    // Initialize hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                let uid = userCredential.user.uid;
                localStorage.setItem("uid", uid);
                let database = firebase.firestore();
                database.collection("users").where("uid", "==", uid).get()
                    .then((docRef) => {
                        docRef.forEach(doc => localStorage.setItem("id", doc.id));
                    }).catch((error) => {
                        console.log("Error getting document: ", error);
                    })
                admin.auth().createCustomToken(uid).then((customToken) => {
                    localStorage.setItem("token", customToken);
                    localStorage.setItem("isLoggedIn", "true");
                    setLoading(false);
                    setLoggedIn(true);
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                errorCode === "auth/user-not-found" ? showErrMes(true) : alert("Đăng nhập thất bại, hãy thử lại sau...");
                setLoading(false);
            });
    };
    return (
        isLoggedIn ? <Redirect to="/" /> :
            <Form onSubmit={handleSubmit(onSubmit)} className="login-form d-flex flex-column px-3 py-3">
                <Logo align="left" textVariant="secondary" />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-secondary font-weight-bold">Địa chỉ email/Tên đăng nhập</Form.Label>
                    <Form.Control onFocus={() => showErrMes(false)} type="email" placeholder="Nhập địa chỉ email" {...register("email", { require: true })} />
                </Form.Group>
                <div style={{
                    display: isErrored ? "block" : "none",
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px"
                }}>
                    Địa chỉ email hoặc mật khẩu không chính xác ...
                </div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-secondary font-weight-bold">Mật khấu</Form.Label>
                    <Form.Control onFocus={() => showErrMes(false)} autoComplete="false" type="password" placeholder="Nhập mật khẩu" {...register("password", { required: true })} />
                </Form.Group>
                <div className="py-2 text-secondary">
                    Bạn chưa có tài khoản, <Link to="signup" className="sign-up-button text-primary">đăng ký</Link> ngay
                </div>
                <Button
                    disabled={isLoading}
                    className="font-weight-bold"
                    type="submit"
                >
                    {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : 'Đăng nhập'}
                </Button>
            </Form>
    );
}