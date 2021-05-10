import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import SearchBar from "./../components/common/SearchBar";
import Shortcut from "./../components/common/Shortcut";
import PostList from "./../components/posts/PostList";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import NewPost from "./../components/posts/NewPost";

export default function HomePage(props) {
    useEffect(() => {
        if (!props.navBarState) props.setNavBar(true);
        if (!props.userSideBarState) props.setUserSideBar(true);
    });
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const [auth, setAuth] = useState(false);
    const [isRedirectToFriendPage, redirectToFriendPage] = useState(false);
    const [postList, setPostList] = useState("");
    const userId = localStorage.getItem("id");
    // Get Firebase firestore data
    const database = firebase.firestore();
    const getPostData = () => {
        database.collection("users").doc(userId).get()
            .then((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // Get Firebase storage data
                setPostList(doc.data().postList);
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    if (auth === false) {
        if (isLoggedIn !== "true") {
            if (token) {
                firebase.auth().signInWithCustomToken(token).then((userCreadential) => {
                    console.log("Login successfully with token: ", userCreadential.user);
                    setAuth(true);
                    getPostData();
                }).catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert("Đã xảy ra sự số, hãy đăng nhập lại!");
                    return <Redirect to="/login" />
                })
            } else return <Redirect to="/login" />
        } else {
            console.log("Already logged in");
            setAuth(true);
            getPostData();
        }
    }
    return (
        auth ?
            isRedirectToFriendPage ?
                <Redirect to={{ pathname: "/friend", state: { tabSelected: 2 } }} /> :
                <>
                    <Container fluid className="page d-flex">
                        <div className="left-box">
                            <Shortcut />
                        </div>
                        <div className="main-box d-flex flex-column justify-content-center py-4">
                            <SearchBar targetsearch="Nista" />
                            {postList === "" ?
                                <Row className="justify-content-center">
                                    <Spinner animation="border" variant="secondary" />
                                </Row> :
                                <PostList postList={postList} />}
                        </div>
                        <div className="right-box">
                            <SuggestFriend top="0" height="297.5px" displayAmount={2} displayMoreButton redirectControl={(v) => redirectToFriendPage(v)} />
                            <Contact height="286px" listheight="215px" mt="1" />
                        </div>
                    </Container>
                    <NewPost updatePost={() => getPostData()} />
                </>
            : <LoaderSpinner />
    );
}