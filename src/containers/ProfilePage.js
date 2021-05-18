import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, useRouteMatch } from "react-router-dom";

import { firebase } from "./../App";

import Shortcut from "./../components/common/Shortcut";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import ProfileWall from "./../components/users/ProfileWall";

export default function ProfilePage(props) {
    useEffect(() => {
        if (!props.navBarState) props.setNavBar(true);
        if (!props.userSideBarState) props.setUserSideBar(true);
    });
    const { path, url } = useRouteMatch();
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
                        <Shortcut />
                    </div>
                    <div className="main-box d-flex flex-column justify-content-center py-4">
                        <ProfileWall tabs={props.routes} user="owner" link={url} path={path} />
                    </div>
                    <div className="right-box">
                        <SuggestFriend
                            top="0"
                            height="297.5px"
                            displayAmount={2}
                            displayMoreButton
                            redirectControl={(v) => redirectToFriendPage(v)} />
                        <Contact height="280px" listheight="215px" mt="1" />
                    </div>
                </Container>
            </>
    );
}