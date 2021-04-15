import React from 'react';
import { Container, Col, Row, Image, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersCog, faLocationArrow, faExclamationCircle, faUsersSlash } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/friends/FriendList.css";
import friendList from "./../../../resources/database/friendData";
class FriendList extends React.Component {
    render() {
        return (
            <Container fluid className="friend-list">
                {friendList.map((friend, i) => {
                    return (
                        <Row
                            className="friend-item d-flex align-items-center bg-light mx-0 mb-2 px-2 py-4 rounded"
                            key={i}
                        >
                            <Col xs={2} className="pl-0">
                                <Image src={friend.avatar} roundedCircle className="avatar-suggest ml-2" />
                            </Col>
                            <Col xs={8} className="friend-info d-flex flex-column justify-content-between align-items-start py-1">
                                <span className="user-name ml-0">{friend.username}</span>
                                <span className="user-info ml-0">{friend.info}</span>
                                <span className="mutual-info ml-0">{friend.mutualFriend} mutual friends</span>
                            </Col>
                            <Col xs={2} className="friend-settings">
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" id="dropdown-settings">
                                        <FontAwesomeIcon icon={faUsersCog} size="2x" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="d-flex px-1">
                                            <Col xs={2}>
                                                <FontAwesomeIcon icon={faLocationArrow} size="lg" />
                                            </Col>
                                            <Col xs={10} className="pl-4">
                                                Gửi tin nhắn
                                            </Col>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex px-1">
                                            <Col xs={2}>
                                                <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
                                            </Col>
                                            <Col xs={10} className="pl-4">
                                                Chặn
                                            </Col>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex px-1">
                                            <Col xs={2}>
                                                <FontAwesomeIcon icon={faUsersSlash} size="lg" />
                                            </Col>
                                            <Col xs={10} className="pl-4">
                                                Huỷ kết bạn
                                            </Col>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        );
    }
}


export default FriendList;