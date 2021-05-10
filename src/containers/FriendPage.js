import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import Contact from "./../components/messages/Contact";
import Shortcut from "./../components/common/Shortcut";
import FriendControl from "./../components/friends/FriendControl";

export default function FriendPage(props) {
    useEffect(() => { 
        if (!props.navBarState) props.setNavBar(true);
        if (!props.userSideBarState) props.setUserSideBar(true);
    });
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
            <Container fluid className="page d-flex">
                <div className="left-box">
                    <Shortcut />
                </div>
                <div className="main-box d-flex flex-column justify-content-center pt-4">
                    <FriendControl tabs={props.tabs} tabSelected={props.location.state !== null ? props.location.state.tabSelected : undefined} />
                </div>
                <div className="right-box">
                    <Contact height="586px" listheight="520px" mt="1" />
                </div>
            </Container>
        </> : <LoaderSpinner />
    );
}