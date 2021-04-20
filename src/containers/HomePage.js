import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import SearchBar from "./../components/common/SearchBar";
import Shortcut from "./../components/common/Shortcut";
import PostList from "./../components/posts/PostList";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import UserSideBar from "./../components/common/UserSideBar";
import NewPost from "./../components/posts/NewPost";
export default function HomePage(props) {
    useEffect(() => props.hideNavBar(false));
    return (
        <>
            <UserSideBar />
            <Container fluid className="page d-flex fixed">
                <div className="left-box">
                    <Shortcut />
                </div>
                <div className="main-box d-flex flex-column justify-content-center py-4">
                    <SearchBar targetsearch="Nista" />
                    <PostList />
                </div>
                <div className="right-box">
                    <SuggestFriend top="0" />
                    <Contact height="280px" listheight="215px" mt="1" />
                </div>
            </Container>
            <NewPost />
        </>
    );
}