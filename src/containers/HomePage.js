import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import SearchBar from "./../components/common/SearchBar";
import Shortcut from "./../components/common/Shortcut";
import PostList from "./../components/posts/PostList";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import UserSideBar from "./../components/common/UserSideBar";
import NewPost from "./../components/posts/NewPost";

export default function HomePage(props) {
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    useEffect(() => { if (!props.navBarState) props.setNavBar(true) });
    const [auth, setAuth] = useState(false);
    const [postList, setPostList] = useState("");
    const uid = localStorage.getItem("uid");
    // Get Firebase firestore data
    const database = firebase.firestore();
    const getPostData = () => {
        database.collection("users")
            .where("uid", "==", uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // Get Firebase storage data
                    setPostList(doc.data().postList);
                })
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    if (auth === false) {
        if (isLoggedIn !== "true") {
            firebase.auth().signInWithCustomToken(token).then((userCreadential) => {
                console.log("Login successfully with token: ", userCreadential.user);
                setAuth(true);
                getPostData();
            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert("Đã xảy ra sự số, hãy đăng nhập lại!");
                return (<Redirect to="/login" />)
            })
        } else {
            console.log("Already logged in");
            setAuth(true);
            getPostData();
        }
    }
    return (
        auth ? <>
            <UserSideBar />
            <Container fluid className="page d-flex">
                <div className="left-box">
                    <Shortcut />
                </div>
                <div className="main-box d-flex flex-column justify-content-center py-4">
                    <SearchBar targetsearch="Nista" />
                    {postList === "" ? <Spinner animation="border" variant="secondary" /> : <PostList postList={postList} />}
                </div>
                <div className="right-box">
                    <SuggestFriend top="0" />
                    <Contact height="280px" listheight="215px" mt="1" />
                </div>
            </Container>
            <NewPost />
        </> : <LoaderSpinner />
    );
}