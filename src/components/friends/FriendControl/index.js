import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import "./../../../styles/friends/FriendControl.css";
import SearchBar from "./../../common/SearchBar";
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
            <Container fluid className="friend-control pt-4">
                <SearchBar targetsearch="danh sách bạn bè" />
                <Row className="tab-button-list justify-content-between mx-0 mb-3 pb-2">
                    <Col className="px-0">
                        <Button
                            variant={this.state.selectedTab === "friend-list" ? "primary" : "white"}
                            className="tab-button py-2 w-100"
                            onClick={this.selectTab.bind(this, "friend-list")}
                        >
                            Tất cả bạn bè
                        </Button>
                    </Col>
                    <Col className="px-0">
                        <Button
                            variant={this.state.selectedTab === "invite-list" ? "primary" : "white"}
                            className="tab-button py-2 w-100"
                            onClick={this.selectTab.bind(this, "invite-list")}
                        >
                            Lời mời kết bạn
                        </Button>
                    </Col>
                    <Col className="px-0">
                        <Button
                            variant={this.state.selectedTab === "suggest-list" ? "primary" : "white"}
                            className="tab-button py-2 w-100"
                            onClick={this.selectTab.bind(this, "suggest-list")}
                        >
                            Gợi ý kết bạn
                        </Button>
                    </Col>
                </Row>
                <Row className="tab-display mx-0 pb-2">
                    {this.state.selectedTab === "friend-list" ? <FriendList /> : <InviteList />}
                </Row>
            </Container>
        );
    }
}


export default FriendControl;