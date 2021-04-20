import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import UserSideBar from "./../components/common/UserSideBar";
import Contact from "./../components/messages/Contact";
import Shortcut from "./../components/common/Shortcut";
import FriendControl from "./../components/friends/FriendControl";
export default function FriendPage(props) {
    useEffect(() => props.hideNavBar(false));
    return (
        <>
            <UserSideBar />
            <Container fluid className="page d-flex fixed">
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
        </>
    );
}