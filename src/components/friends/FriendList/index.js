import React from 'react';
import { Container, Col, Row, Image, Dropdown, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersCog, faLocationArrow, faExclamationCircle, faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { firebase } from "./../../../App";

import "./../../../styles/friends/FriendList.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            friendList: []
        }
    }
    componentDidMount() {
        const userId = localStorage.getItem("id");
        const database = firebase.firestore();
        const storage = firebase.storage().ref();
        database.collection("users").doc(userId).get()
            .then((doc) => {
                if (doc.exists) {
                    let friends = doc.data().friendList; // friendList of owner
                    if (friends.length > 0) {
                        friends.forEach((friendId) => {
                            database.collection("users").doc(friendId).get()
                                .then((docRef) => {
                                    if (docRef.exists) {
                                        let buddies = docRef.data().friendList; // friendList of user
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
                                                            mutualFriend: countMutual,
                                                            uid: docRef.data().uid
                                                        }]),
                                                        loading: false
                                                    })
                                                }).catch(error => console.log("Error downloading avatar from storage: ", error));
                                        } else {
                                            this.setState({
                                                friendList: this.state.friendList.concat([{
                                                    avatar: avatarDemo,
                                                    displayName: docRef.data().displayName,
                                                    shareInfo: docRef.data().shareInfo,
                                                    mutualFriend: countMutual,
                                                    uid: docRef.data().uid,
                                                    loadingFriendAction: false
                                                }]),
                                                loading: false
                                            })
                                        }
                                    } else console.log("No such user friend document");
                                }).catch(error => console.log("Error while getting friend data: ", error))
                        })
                    } else {
                        console.log("There is no friend");
                        this.setState({ loading: false });
                    }
                } else console.log("No such (user) document");
            }).catch(error => console.log("Error while getting user data: ", error));
    }
    handleUnfriend(userUid, index) {
        // must have logon to use this API
        this.state.friendList[index].loadingFriendAction = true;
        this.setState({ friendList: this.state.friendList });
        const database = firebase.firestore();
        const userId = localStorage.getItem("id");
        database.collection("users").where("uid", "==", userUid).get()
            .then((doc) => {
                doc.forEach((userDoc) => {
                    database.collection("users").doc(userId)
                        .update({
                            friendList: firebase.firestore.FieldValue.arrayRemove(userDoc.id)
                        }).then(() => {
                            console.log("Removed user to owner friendList successfully, user uid=", userUid);
                            database.collection("users").doc(userDoc.id)
                                .update({
                                    friendList: firebase.firestore.FieldValue.arrayRemove(userId)
                                }).then(() => {
                                    this.state.friendList.splice(index, 1);
                                    this.setState({
                                        friendList: this.state.friendList
                                    });
                                    console.log("Removed owner to user friendList successfully, user uid=", userUid);
                                }).catch(error => console.log("Error while removing owner from user friendList: ", error));
                        }).catch(error => console.log("Error while removing user from owner friendList: ", error));
                })
            }).catch(error => console.log("Error while getting user id through uid=", userUid, error));
    }
    render() {
        return (
            <Container fluid className="friend-list">
                {this.state.loading ?
                    <Row className="mx-0 justify-content-center">
                        <Spinner animation="border" className="loading-spinner" />
                    </Row> :
                    this.state.friendList.length > 0 ?
                        this.state.friendList.map((friend, i) => {
                            return (
                                <Row
                                    className="friend-item d-flex align-items-center bg-light mx-0 mb-2 px-2 py-4 rounded"
                                    key={i}
                                >
                                    <Col xs={10} className="px-0">
                                        <Link
                                            className="d-flex align-items-center mx-0 mb-2 px-2 py-3 w-100 rounded"
                                            to={"/user/" + friend.uid}
                                            key={i}>
                                            <Col xs={3} className="pl-0">
                                                <Image src={friend.avatar} thumbnail roundedCircle className="avatar-suggest ml-2" />
                                            </Col>
                                            <Col xs={9} className="friend-info d-flex flex-column justify-content-between align-items-start py-1">
                                                <span className="user-name ml-0">{friend.displayName}</span>
                                                <span className="user-info ml-0">{friend.shareInfo}</span>
                                                <span className="mutual-info ml-0">{friend.mutualFriend} mutual friends</span>
                                            </Col>
                                        </Link>
                                    </Col>
                                    <Col xs={2} className="friend-settings">
                                        <Dropdown className="friend-dropdown">
                                            <Dropdown.Toggle variant="white" id="dropdown-settings" disabled={this.state.friendList[i].loadingFriendAction ? true : false}>
                                                {this.state.friendList[i].loadingFriendAction ?
                                                    <Spinner animation="border" /> :
                                                    <FontAwesomeIcon icon={faUsersCog} size="2x" />}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className="d-flex px-1">
                                                    <Col xs={2}>
                                                        <FontAwesomeIcon icon={faLocationArrow} size="sm" />
                                                    </Col>
                                                    <Col xs={10} className="pl-4">
                                                        Gửi tin nhắn
                                                    </Col>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="d-flex px-1">
                                                    <Col xs={2}>
                                                        <FontAwesomeIcon icon={faExclamationCircle} size="sm" />
                                                    </Col>
                                                    <Col xs={10} className="pl-4">
                                                        Chặn
                                                    </Col>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="d-flex px-1" onClick={this.handleUnfriend.bind(this, friend.uid, i)}>
                                                    <Col xs={2}>
                                                        <FontAwesomeIcon icon={faUsersSlash} size="sm" />
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
                        }) :
                        <p style={{
                            color: "gray",
                            textAlign: "center",
                            paddingTop: "20px",
                            paddingBottom: "20px"
                        }}>Chưa có bạn bè, hãy kết thêm bạn nhé!</p>}
            </Container>
        );
    }
}