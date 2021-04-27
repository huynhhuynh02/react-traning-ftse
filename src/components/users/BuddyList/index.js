import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

import "./../../../styles/friends/FriendList.css";
import friendList from "./../../../resources/database/friendData";
export default function BuddyList() {
    return (
        <Container fluid className="friend-list">
            {friendList.map((friend, i) => {
                return (
                    <Row
                        className="friend-item d-flex align-items-center bg-light mx-0 mb-2 px-2 py-4 rounded"
                        key={i}
                    >
                        <Col xs={2} className="pl-0">
                            <Image src={friend.avatar} thumbnail roundedCircle className="avatar-suggest ml-2" />
                        </Col>
                        <Col xs={8} className="friend-info d-flex flex-column justify-content-between align-items-start py-1">
                            <span className="user-name ml-0">{friend.username}</span>
                            <span className="user-info ml-0">{friend.info}</span>
                            <span className="mutual-info ml-0">{friend.mutualFriend} mutual friends</span>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    );
}