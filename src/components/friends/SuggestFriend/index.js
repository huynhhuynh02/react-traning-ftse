import React from 'react';
import { Button, Col, Image, Container, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { firebase } from "./../../../App";

import "./../../../styles/friends/SuggestFriend.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";

export default class SuggestFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestFriendList: [],
            loading: true
        }
    }
    componentDidMount() {
        const database = firebase.firestore();
        const storage = firebase.storage().ref();
        const userId = localStorage.getItem("id");
        database.collection("users").doc(userId).get()
            .then((docRef) => {
                database.collection("users").where("country", "==", docRef.data().country)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (doc.id !== userId && docRef.data().friendList.find(id => id === doc.id) === undefined) { // filter owner and users that're friends already
                                let buddies = doc.data().friendList; // friendList of user
                                let friends = docRef.data().friendList; // friendList of owner
                                let countMutual = 0
                                for (let i = 0; i < buddies.length; i++) {
                                    for (let j = 0; j < friends.length; j++) {
                                        if (friends[j] === buddies[i]) {
                                            countMutual++;
                                        }
                                    }
                                }
                                if (doc.data().avatar !== undefined) {
                                    storage.child("avatars/" + doc.data().avatar).getDownloadURL()
                                        .then((url) => {
                                            this.setState({
                                                suggestFriendList: this.state.suggestFriendList.concat([{
                                                    avatar: url,
                                                    displayName: doc.data().displayName,
                                                    country: doc.data().country,
                                                    mutualFriend: countMutual,
                                                    uid: doc.data().uid
                                                }]),
                                                loading: false
                                            })
                                        }).catch(error => console.log("Error while getting user avatar: ", error));
                                } else {
                                    this.setState({
                                        suggestFriendList: this.state.suggestFriendList.concat([{
                                            avatar: avatarDemo,
                                            displayName: doc.data().displayName,
                                            country: doc.data().country,
                                            mutualFriend: countMutual,
                                            uid: doc.data().uid
                                        }]),
                                        loading: false
                                    })
                                }
                            }
                        })
                    }).catch(error => console.log("Error while getting user (country filered):", error));
                database.collection("users").where("country", "!=", docRef.data().country).get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (doc.id !== userId && docRef.data().friendList.find(id => id === doc.id) === undefined) { // filter owner and users that're friends already
                                if (Math.random() >= 0.5) { // add random user into suggestFriendList
                                    let buddies = doc.data().friendList; // friendList of user
                                    let friends = docRef.data().friendList; // friendList of owner
                                    let countMutual = 0
                                    for (let i = 0; i < buddies.length; i++) {
                                        for (let j = 0; j < friends.length; j++) {
                                            if (friends[j] === buddies[i]) {
                                                countMutual++;
                                            }
                                        }
                                    }
                                    if (doc.data().avatar !== undefined) {
                                        storage.child("avatars/" + doc.data().avatar).getDownloadURL()
                                            .then((url) => {
                                                this.setState({
                                                    suggestFriendList: this.state.suggestFriendList.concat([{
                                                        avatar: url,
                                                        displayName: doc.data().displayName,
                                                        country: doc.data().country,
                                                        mutualFriend: countMutual,
                                                        uid: doc.data().uid
                                                    }]),
                                                    loading: false
                                                })
                                            }).catch(error => console.log("Error while getting user avatar: ", error));
                                    } else {
                                        this.setState({
                                            suggestFriendList: this.state.suggestFriendList.concat([{
                                                avatar: avatarDemo,
                                                displayName: doc.data().displayName,
                                                country: doc.data().country,
                                                mutualFriend: countMutual,
                                                uid: doc.data().uid
                                            }]),
                                            loading: false
                                        })
                                    }
                                }
                            }
                        })
                    }).catch(error => console.log("Error while get users: ", error));
            }).catch(error => console.log("Error while getting owner data: ", error));
    }
    moreSuggestClick() {
        this.props.redirectControl(true)
    }
    render() {
        return (
            <Container
                className="suggest-friend mt-1 pb-0"
                style={{
                    top: this.props.top,
                    height: this.props.height
                }}>
                <h5 className="py-1 text-left">Có thể bạn quen biết</h5>
                <div className="suggest-friend-list">
                    {
                        this.state.loading ?
                            <Spinner animation="border" className="loading-spinner" /> :
                            this.state.suggestFriendList.map((sfdata, i) => {
                                if (i < this.props.displayAmount) {
                                    return (
                                        <Link
                                            className="sf-item d-flex align-items-center mx-0 mb-2 px-2 py-3 rounded"
                                            to={"/user/" + sfdata.uid}
                                            key={i}>
                                            <Col xs={3} className="px-0">
                                                <Image src={sfdata.avatar} thumbnail roundedCircle className="avatar-suggest" />
                                            </Col>
                                            <Col xs={9} className="sf-info d-flex flex-column justify-content-start align-items-start py-1">
                                                <span className="user-name ml-0">{sfdata.displayName}</span>
                                                <span className="user-info text-left ml-0">{sfdata.country}</span>
                                                <span className="mutual-info ml-0">{sfdata.mutualFriend} mutual friends</span>
                                            </Col>
                                        </Link>
                                    )
                                } else {
                                    return <span key={i}></span>
                                }
                            })
                    }
                </div>
                {this.props.displayMoreButton ?
                    <Button
                        variant="link"
                        className="more-suggest text-danger pr-0"
                        onClick={this.moreSuggestClick.bind(this)}>
                        Xem thêm ...
                    </Button> :
                    <></>}
            </Container >
        );
    }
}