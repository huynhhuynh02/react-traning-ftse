import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from "react-router-dom";
import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import PostDetail from "./../components/posts/PostDetail";

export default function PostPage(props) {
    useEffect(() => { 
        if (props.navBarState) props.setNavBar(false); 
        if (props.userSideBarState) props.setUserSideBar(false);
    });
    const [auth, setAuth] = useState(false);
    const { pathname } = useLocation();
    const postId = pathname.slice(6);
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
        auth ? <PostDetail postdata={postId} /> : <LoaderSpinner />
    );
}