import React from 'react';
import { Container, Col } from 'react-bootstrap';

import SearchBar from "./../components/common/SearchBar";
import Shortcut from "./../components/common/Shortcut";
import PostList from "./../components/posts/PostList";
import SuggestFriend from "./../components/friends/SuggestFriend";
import Contact from "./../components/messages/Contact";
import UserSideBar from "./../components/common/UserSideBar";
import NewPost from "./../components/posts/NewPost";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <UserSideBar />
                <Container fluid className="page d-flex fixed">
                    <div
                        xs={3}
                        className="left-box"
                    >
                        <Shortcut />
                    </div>
                    <div
                        xs={6}
                        className="main-box d-flex flex-column justify-content-center py-4"
                    >
                        <SearchBar targetsearch="Nista" />
                        <PostList />
                    </div>
                    <div
                        xs={3}
                        className="right-box"
                    >
                        <SuggestFriend />
                        <Contact />
                    </div>
                </Container>
                <NewPost />
            </>
        );
    }
}


export default HomePage;