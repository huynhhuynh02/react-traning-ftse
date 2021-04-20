import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCity, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

import profileBg from "./../resources/images/login-bg.jpeg";
import profileAvatar from "./../resources/images/avatar.png";
import "./../styles/containers/ProfilePage.css";
import PostList from "../components/posts/PostList";
import FriendList from "../components/friends/FriendList";
import LibraryList from "../components/common/LibraryList";
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "post-list" /* post-list | friend-list | library-list */
        }
    }
    selectTab(tab) {
        this.setState({
            selectedTab: tab
        })
    }
    render() {
        let tabDisplay = this.state.selectedTab
        switch (tabDisplay) {
            case "post-list":
                tabDisplay = <PostList />;
                break;
            case "friend-list":
                tabDisplay = <FriendList />
                break;
            default:
                tabDisplay = <LibraryList />
                break;
        }
        return (
            <>
                <div className="profile-bg d-flex justify-content-center">
                    <Image fluid src={profileBg} />
                </div>
                <div className="profile">
                    <Row className="d-flex justify-content-center mx-0">
                        <Image className="avatar-profile" src={profileAvatar} />
                    </Row>
                    <div className="profile-name py-2">Name Test Sample</div>
                    <div className="personal-slogan text-secondary">Personal Slogan</div>
                    <Container fluid>
                        <Row className="addition-info d-flex justify-content-between mx-0 py-4">
                            <Col xs={5} className="share-info text-secondary py-2">
                                Some more info about user
                            </Col>
                            <Col xs={2} className="settings-friend-button text-center py-3">
                                <FontAwesomeIcon icon={faCog} size="lg" />
                            </Col>
                            <Col xs={5} className="sumary-info text-secondary py-2">
                                <Row className="city py-1">
                                    <Col xs={2}>
                                        <FontAwesomeIcon icon={faCity} size="lg" className="mr-3" />
                                    </Col>
                                    <Col xs={10}>
                                        Đang sống ở <strong className="value text-dark">Test</strong>
                                    </Col>
                                </Row>
                                <Row className="nationality py-1">
                                    <Col xs={2}>
                                        <FontAwesomeIcon icon={faGlobeEurope} size="lg" className="mr-3" />
                                    </Col>
                                    <Col xs={10}>
                                        Quốc tịch <strong className="value text-dark">Test</strong>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="tab-button-list justify-content-between mx-0 mb-3 pb-2">
                            <Button
                                variant={this.state.selectedTab === "post-list" ? "primary" : "white"}
                                className="tab-button px-5 py-2"
                                onClick={this.selectTab.bind(this, "post-list")}
                            >
                                Bài viết
                            </Button>
                            <Button
                                variant={this.state.selectedTab === "friend-list" ? "primary" : "white"}
                                className="tab-button px-5 py-2"
                                onClick={this.selectTab.bind(this, "friend-list")}
                            >
                                Bạn bè
                            </Button>
                            <Button
                                variant={this.state.selectedTab === "library-list" ? "primary" : "white"}
                                className="tab-button px-5 py-2"
                                onClick={this.selectTab.bind(this, "library-list")}
                            >
                                Thư viện
                            </Button>
                        </Row>
                        <Row className="tab-display mx-0 pb-2">
                            {tabDisplay}
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}


export default ProfilePage;