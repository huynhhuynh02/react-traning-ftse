import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, useRouteMatch, useLocation } from "react-router-dom";

import { firebase } from "./../App";

import Shortcut from "./../components/common/Shortcut";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import ProfileWall from "./../components/users/ProfileWall";
export default function UserPage(props) {
    useEffect(() => {
        if (auth) {
            if (!props.navBarState) props.setNavBar(true);
            if (!props.userSideBarState) props.setUserSideBar(true);
        } else {
            if (props.navBarState) props.setNavBar(false);
            if (props.userSideBarState) props.setUserSideBar(false);
        }
    });
    const { path, url } = useRouteMatch();
    const { pathname } = useLocation();
    const uid = pathname.slice(6, 34);
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const [auth, setAuth] = useState(false);
    const [isRedirectToFriendPage, redirectToFriendPage] = useState(false);
    if (auth === false) {
        if (isLoggedIn !== "true") {
            if (token) {
                firebase.auth().signInWithCustomToken(token).then((userCreadential) => {
                    console.log("Login successfully with token: ", userCreadential.user);
                    setAuth(true);
                }).catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert("Đã xảy ra sự số, hãy đăng nhập lại!");
                    return <Redirect to="/login" />
                })
            } else console.log("There is no login user!");
        } else {
            console.log("Already logged in");
            setAuth(true);
        }
    }
    return (
        isRedirectToFriendPage ?
            <Redirect to={{ pathname: "/friend", state: { tabSelected: 2 } }} /> :
            <>
                <Container fluid className="page d-flex">
                    <div className="left-box">
                        {auth ? <Shortcut /> : <></>}
                    </div>
                    <div
                        className="main-box d-flex flex-column justify-content-center py-4"
                        style={{
                            width: auth ? "" : "80%",
                            marginLeft: auth ? "" : "10%"
                        }}>
                        <ProfileWall tabs={props.routes} user={uid} link={url} path={path} />
                    </div>
                    <div className="right-box">
                        {auth ?
                            <>
                                <SuggestFriend
                                    top="0"
                                    height="297.5px"
                                    displayAmount={2}
                                    redirectControl={(v) => redirectToFriendPage(v)}
                                    displayMoreButton />
                                <Contact height="280px" listheight="215px" mt="1" />
                            </> :
                            <></>}
                    </div>
                </Container>
            </>
    );
}