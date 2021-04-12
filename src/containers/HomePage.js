import React from 'react';
import { Container } from 'react-bootstrap';

import SearchBar from "./../components/common/SearchBar";
import Shortcut from "./../components/common/Shortcut";
import PostList from "./../components/posts/PostList";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import UserSideBar from "./../components/common/UserSideBar";
import NewPost from "./../components/posts/NewPost";
class HomePage extends React.Component {
    render() {
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
                        <SuggestFriend />
                        <Contact height="288px" listheight="220px" />
                    </div>
                </Container>
                <NewPost />
            </>
        );
    }
}


export default HomePage;