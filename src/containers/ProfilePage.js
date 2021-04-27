import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import UserSideBar from "./../components/common/UserSideBar";
import Shortcut from "./../components/common/Shortcut";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import ProfileWall from "./../components/users/ProfileWall";

export default function ProfilePage(props) {
    useEffect(() => {if (!props.navBarState) props.setNavBar(true)});
    return (
        <>
            <UserSideBar />
            <Container fluid className="page d-flex">
                <div className="left-box">
                    <Shortcut />
                </div>
                <div className="main-box d-flex flex-column justify-content-center py-4">
                    <ProfileWall tabs={props.routes} />
                </div>
                <div className="right-box">
                    <SuggestFriend top="0" />
                    <Contact height="280px" listheight="215px" mt="1" />
                </div>
            </Container>
        </>
    );
}