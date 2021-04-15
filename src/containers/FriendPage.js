import React from 'react';
import { Container } from 'react-bootstrap';

import UserSideBar from "./../components/common/UserSideBar";
import Contact from "./../components/messages/Contact";
import Shortcut from "./../components/common/Shortcut";
import FriendControl from "./../components/friends/FriendControl";
import Profile from "../components/common/Profile";
class FriendPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProfileId: "1"
        }
    }
    render() {
        return (
            <>
                <UserSideBar />
                <Container fluid className="page d-flex fixed">
                    <div className="left-box">
                        <Shortcut />
                    </div>
                    <div className="main-box d-flex flex-column justify-content-center pt-4">
                        {this.state.currentProfileId === "" ? <FriendControl /> : <Profile />}
                    </div>
                    <div className="right-box">
                        <Contact height="586px" listheight="520px" mt="1" />
                    </div>
                </Container>
            </>
        );
    }
}


export default FriendPage;