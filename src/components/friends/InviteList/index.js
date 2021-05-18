import React from 'react';
import { Container, Button, Col, Row, Image, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { firebase } from "./../../../App";

import "./../../../styles/friends/InviteList.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";

export default class InviteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            inviteList: []
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
                    if (addFriendList.length > 0) {
                        addFriendList.forEach((user) => {
                            database.collection("users").doc(user).get()
                                .then((docRef) => {
                                    if (docRef.exists) {
                                        let buddies = docRef.data().inviteList; // inviteList of user
                                        let friends = doc.data().inviteList; // inviteList of owner
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
                                                        inviteList: this.state.inviteList.concat([{
                                                            avatar: url,
                                                            displayName: docRef.data().displayName,
                                                            shareInfo: docRef.data().shareInfo,
                                                            mutualFriend: countMutual,
                                                            uid: docRef.data().uid
                                                        }]),
                                                        loading: false
                                                    })
                                                }).catch(error => console.log("Error while get user avatar from storage: ", error));
                                        } else {
                                            this.setState({
                                                inviteList: this.state.inviteList.concat([{
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
                                    } else console.log("No such document invite user");
                                }).catch(error => console.log("Error while getting invite user data: ", error));
                        })
                    } else {
                        console.log("No invite friends");
                        this.setState({ loading: false });
                    }
                } else console.log("No such document user");
            }).catch(error => console.log("Error while getting user data: ", error));
    }
    handleRejectInviteAddFriendToOwner(userUid, index) {
        // must have logon to use this API
        this.state.inviteList[index].loadingFriendAction = true;
        this.setState({ inviteList: this.state.inviteList });
        const database = firebase.firestore();
        const userId = localStorage.getItem("id");
        database.collection("users").where("uid", "==", userUid).get()
            .then((doc) => {
                doc.forEach((userDoc) => {
                    database.collection("users").doc(userId)
                        .update({
                            inviteList: firebase.firestore.FieldValue.arrayRemove({
                                "type": "addFriend",
                                "userId": userDoc.id
                            })
                        }).then(() => {
                            this.state.inviteList.splice(index, 1);
                            this.setState({
                                inviteList: this.state.inviteList
                            });
                            console.log("Rejected invite add friend successfully from user uid=", userUid);
                        }).catch(error => console.log("Error while rejecting invite add friend to owner: ", error));
                })
            }).catch(error => console.log("Error while getting user id through uid=", userUid, error));
    }
    handleAcceptInviteAddFriend(userUid, index) {
        // must have logon to use this API
        this.state.inviteList[index].loadingFriendAction = true;
        this.setState({ inviteList: this.state.inviteList });
        const database = firebase.firestore();
        const userId = localStorage.getItem("id");
        database.collection("users").where("uid", "==", userUid).get()
            .then((doc) => {
                doc.forEach((userDoc) => {
                    database.collection("users").doc(userId)
                        .update({
                            inviteList: firebase.firestore.FieldValue.arrayRemove({
                                "type": "addFriend",
                                "userId": userDoc.id
                            })
                        }).then(() => {
                            console.log("Removed invite add friend successfully from user uid=", userUid);
                            database.collection("users").doc(userId)
                                .update({
                                    inviteList: firebase.firestore.FieldValue.arrayUnion(userDoc.id)
                                }).then(() => {
                                    console.log("Added user to owner friendList successfully, user uid=", userUid);
                                    database.collection("users").doc(userDoc.id)
                                        .update({
                                            inviteList: firebase.firestore.FieldValue.arrayUnion(userId)
                                        }).then(() => {
                                            this.state.inviteList.splice(index, 1);
                                            this.setState({
                                                inviteList: this.state.inviteList
                                            });
                                            console.log("Added owner to user friendList successfully, user uid=", userUid);
                                        }).catch(error => console.log("Error while adding owner into user friendList: ", error));
                                }).catch(error => console.log("Error while adding user into owner friendList: ", error));
                        }).catch(error => console.log("Error while removing user invite add friend from inviteList: ", error));
                })
            }).catch(error => console.log("Error while getting user id through uid=", userUid, error));
    }
    render() {
        return (
            <Container fluid className="invite-list">
                {this.state.loading ?
                    <Row className="mx-0 justify-content-center">
                        <Spinner animation="border" className="loading-spinner" />
                    </Row> :
                    this.state.inviteList.length > 0 ?
                        this.state.inviteList.map((invite, i) => {
                            return (
                                <Row className="invite-item d-flex align-items-center mx-0 mb-2 px-2 py-2 rounded bg-light" key={i}>
                                    <Col xs={10} className="invite-profile-link">
                                        <Link
                                            className="d-flex align-items-center mx-0 mb-2 px-2 py-2 rounded bg-light"
                                            to={"/user/" + invite.uid}>
                                            <Col xs={3} className="pl-0">
                                                <Image src={invite.avatar} thumbnail roundedCircle className="avatar-suggest ml-2" />
                                            </Col>
                                            <Col xs={9} className="invite-info d-flex flex-column justify-content-between align-items-start py-1">
                                                <span className="user-name ml-0">{invite.displayName}</span>
                                                <span className="user-info ml-0">{invite.shareInfo}</span>
                                                <span className="mutual-info ml-0">{invite.mutualFriend} mutual friends</span>
                                            </Col>
                                        </Link>
                                    </Col>
                                    <Col xs={2} className="action-button-list d-flex flex-column justify-content-between align-items-center">
                                        {
                                            this.state.inviteList[i].loadingFriendAction ?
                                                <Spinner animation="border" /> :
                                                <>
                                                    <Button className="action-button" variant="success" onClick={this.handleAcceptInviteAddFriend.bind(this, invite.uid, i)}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </Button>
                                                    <Button className="action-button" variant="danger" onClick={this.handleRejectInviteAddFriendToOwner.bind(this, invite.uid, i)}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </Button>
                                                </>
                                        }
                                    </Col>
                                </Row>
                            )
                        }) :
                        <p style={{
                            color: "gray",
                            textAlign: "center",
                            paddingTop: "20px",
                            paddingBottom: "20px"
                        }}>Không có lời mời kết bạn, hãy kết thêm bạn nhé!</p>}
            </Container>
        );
    }
}