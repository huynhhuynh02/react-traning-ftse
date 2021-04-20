import React from 'react';
import { Container, Button, Col, Image, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/friends/InviteList.css";
import friendList from "./../../../resources/database/friendData";
class InviteList extends React.Component {
    render() {
        return (
            <Container fluid className="invite-list">
                {friendList.map((invite, i) => {
                    return (
                        <Jumbotron
                            className="invite-item d-flex align-items-center mx-0 mb-2 px-2 py-2 rounded bg-light"
                            key={i}>
                            <Col xs={2} className="pl-0">
                                <Image src={invite.avatar} thumbnail roundedCircle className="avatar-suggest ml-2" />
                            </Col>
                            <Col xs={8} className="invite-info d-flex flex-column justify-content-between align-items-start py-1">
                                <span className="user-name ml-0">{invite.username}</span>
                                <span className="user-info ml-0">{invite.info}</span>
                                <span className="mutual-info ml-0">{invite.mutualFriend} mutual friends</span>
                            </Col>
                            <Col xs={2} className="action-button-list">
                                <Button className="action-button" variant="success">
                                    <FontAwesomeIcon icon={ faCheck } />                            
                                </Button>
                                <Button className="action-button" variant="danger">
                                    <FontAwesomeIcon icon={ faTimes } />
                                </Button>
                            </Col>
                        </Jumbotron>
                    )
                })}
            </Container>
        );
    }
}


export default InviteList;