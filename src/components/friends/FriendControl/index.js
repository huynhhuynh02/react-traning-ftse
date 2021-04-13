import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import "./../../../styles/friends/FriendControl.css";
import FriendList from "./../FriendList";
import InviteList from "./../InviteList";
class FriendControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "friend-list"
        }
    }
    selectTab(tab) {
        this.setState({
            selectedTab: tab
        })
    }
    render() {
        return (
            <Container fluid className="friend-control">
                <Row className="tab-button-list mx-0 mb-3 pb-2">
                    <Button
                        variant={this.state.selectedTab === "friend-list" ? "primary" : "white"}
                        className="tab-button mr-4 px-5 py-2"
                        onClick={this.selectTab.bind(this, "friend-list")}
                    >
                        Tất cả bạn bè
                    </Button>
                    <Button
                        variant={this.state.selectedTab === "invite-list" ? "primary" : "white"}
                        className="tab-button mr-4 px-5 py-2"
                        onClick={this.selectTab.bind(this, "invite-list")}
                    >
                        Lời mời kết bạn
                    </Button>
                </Row>
                <Row className="tab-display mx-0 pb-2">
                    {this.state.selectedTab === "friend-list" ? <FriendList /> : <InviteList />}
                </Row>
            </Container>
        );
    }
}


export default FriendControl;