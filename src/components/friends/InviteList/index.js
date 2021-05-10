import React from 'react';
import { Container, Button, Col, Row, Image, Jumbotron, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";

import "./../../../styles/friends/InviteList.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";
export default class InviteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            friendList: []
        }
    }
    componentDidMount() {
        const database = firebase.firestore();
        const storage = firebase.storage().ref();
        const userId = localStorage.getItem("id");
        database.collection("users").doc(userId).get()
            .then((doc) => {
                if (doc.exists) {
                    let addFriendList = [];
                    let userInviteList = doc.data().inviteList;
                    for (let i = 0; i < userInviteList.length; i++) {
                        if (userInviteList[i].type === "addFriend") {
                            addFriendList.push(userInviteList[i].userId);
                        }
                    }
                    addFriendList.forEach((user) => {
                        database.collection("users").doc(user).get()
                            .then((docRef) => {
                                if (docRef.exists) {
                                    let buddies = docRef.data().friendList; // friendList of user
                                    let friends = doc.data().friendList; // friendList of owner
                                    let countMutual = 0
                                    for (let i = 0; i < buddies.length; i++) {
                                        for (let j = 0; j < friends.length; j++) {
                                            if (friends[j] === buddies[i]) {
                                                countMutual++;
                                            }
                                        }
                                    }
                                    if (docRef.data().avatar !== undefined) {
                                        storage.child("avatars/" + docRef.data().avatar).getDownloadURL()
                                            .then((url) => {
                                                this.setState({
                                                    friendList: this.state.friendList.concat([{
                                                        avatar: url,
                                                        displayName: docRef.data().displayName,
                                                        shareInfo: docRef.data().shareInfo,
                                                        mutualFriend: countMutual
                                                    }]),
                                                    loading: false
                                                })
                                            }).catch(error => console.log("Error while get user avatar from storage: ", error));
                                    } else {
                                        this.setState({
                                            friendList: this.state.friendList.concat([{
                                                avatar: avatarDemo,
                                                displayName: docRef.data().displayName,
                                                shareInfo: docRef.data().shareInfo,
                                                mutualFriend: countMutual
                                            }]),
                                            loading: false
                                        })
                                    }
                                } else console.log("No such document invite user");
                            }).catch(error => console.log("Error while getting invite user data: ", error));
                    })
                } else console.log("No such document user");
            }).catch(error => console.log("Error while getting user data: ", error));
    }
    render() {
        return (
            <Container fluid className="invite-list">
                {this.state.loading ?
                    <Row className="mx-0 justify-content-center">
                        <Spinner animation="border" className="loading-spinner" />
                    </Row> :
                    this.state.friendList.map((invite, i) => {
                        return (
                            <Jumbotron
                                className="invite-item d-flex align-items-center mx-0 mb-2 px-2 py-2 rounded bg-light"
                                key={i}>
                                <Col xs={2} className="pl-0">
                                    <Image src={invite.avatar} thumbnail roundedCircle className="avatar-suggest ml-2" />
                                </Col>
                                <Col xs={8} className="invite-info d-flex flex-column justify-content-between align-items-start py-1">
                                    <span className="user-name ml-0">{invite.displayName}</span>
                                    <span className="user-info ml-0">{invite.shareInfo}</span>
                                    <span className="mutual-info ml-0">{invite.mutualFriend} mutual friends</span>
                                </Col>
                                <Col xs={2} className="action-button-list">
                                    <Button className="action-button" variant="success">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Button>
                                    <Button className="action-button" variant="danger">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Button>
                                </Col>
                            </Jumbotron>
                        )
                    })}
            </Container>
        );
    }
}