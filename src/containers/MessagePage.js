import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { firebase } from "./../App";

import LoaderSpinner from "./../components/common/LoaderSpinner";
import UserSideBar from "./../components/common/UserSideBar";
import Contact from "./../components/messages/Contact";
import SearchBar from "./../components/common/SearchBar";
import ChatBox from "./../components/messages/ChatBox";
import MessageList from "./../components/messages/MessageList";

import messageList from "./../resources/database/messageData";

export default function MessagePage(props) {
    const [messageSelected, selectMessage] = useState("");
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
                    <MessageList data={messageList} select={selectMessage} />
                </div>
                <div className="main-box d-flex flex-column justify-content-center py-4">
                    {messageSelected !== "" ? <SearchBar targetsearch={"tin nhắn với " + messageSelected.member[0].username} /> : <></>}
                    <ChatBox data={messageSelected} />
                </div>
                <div className="right-box">
                    <Contact height="586px" listheight="520px" mt="1" />
                </div>
            </Container>
        </> : <LoaderSpinner />
    );
}