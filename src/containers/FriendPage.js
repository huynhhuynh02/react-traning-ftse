import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import UserSideBar from "./../components/common/UserSideBar";
import Contact from "./../components/messages/Contact";
import Shortcut from "./../components/common/Shortcut";
import FriendControl from "./../components/friends/FriendControl";

export default function FriendPage(props) {
    useEffect(() => { if (!props.navBarState) props.setNavBar(true) });
    const [auth, setAuth] = useState(false);
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!auth) {
        if (isLoggedIn !== "true") {
            if (token) {
                firebase.auth().signInWithCustomToken(token).then(() => {
                    setAuth(true);
                }).catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert("Đã xảy ra sự số, hãy đăng nhập lại!");
                    return <Redirect to="/login" />
                })
            } else return <Redirect to="/login" />
        } else setAuth(true);
    }
    return (
        auth ? <>
            <UserSideBar />
            <Container fluid className="page d-flex">
                <div className="left-box">
                    <Shortcut />
                </div>
                <div className="main-box d-flex flex-column justify-content-center pt-4">
                    <FriendControl />
                </div>
                <div className="right-box">
                    <Contact height="586px" listheight="520px" mt="1" />
                </div>
            </Container>
        </> : <LoaderSpinner />
    );
}