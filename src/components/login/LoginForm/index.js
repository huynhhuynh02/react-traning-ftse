import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import {
    Link,
    Redirect
} from "react-router-dom";

import "./../../../styles/login/LoginForm.css"
import Logo from "./../../common/Logo";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function LoginForm() {
    const [isLoading, setLoading] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
        return () => { setLoading(false) }
    }, [isLoading]);
    const [error, showErrMes] = useState("none")
    // Initialize hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("login successful", user);
                setLoggedIn(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                showErrMes("block");
            });
    };
    return (isLoggedIn ?
        <Redirect to="/" />
        :
        <Form onSubmit={handleSubmit(onSubmit)} className="login-form d-flex flex-column px-3 py-3">
            < Logo align="left" />
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-light font-weight-bold">Địa chỉ email/Tên đăng nhập</Form.Label>
                <Form.Control type="email" placeholder="Nhập địa chỉ email" {...register("email", { require: true })} />
            </Form.Group>
            <div style={{
                display: error,
                color: "red",
                fontSize: "14px",
                marginBottom: "10px"
            }}>
                Địa chỉ email hoặc mật khẩu không chính xác ...
                        </div>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-light font-weight-bold">Mật khấu</Form.Label>
                <Form.Control autoComplete="false" type="password" placeholder="Nhập mật khẩu" {...register("password", { required: true })} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check className="text-light" type="checkbox" label="Tự động đăng nhập" />
            </Form.Group>
            <div className="py-2 text-light">
                Bạn chưa có tài khoản, <Link to="signup" className="sign-up-button text-primary">đăng ký</Link> ngay
                        </div>
            <Button
                variant="primary"
                disabled={isLoading}
                className="font-weight-bold"
                type="submit"
            >
                {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : 'Đăng nhập'}
            </Button>
        </Form >
    );
}