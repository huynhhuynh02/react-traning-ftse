import React from 'react';
import { Container, Row, Image, Button, Spinner } from "react-bootstrap";

import { firebase } from "./../../../App";
import convertTimestamp from "./../../../resources/functions/convertTimestamp";

import "./../../../styles/posts/CommentReply.css";

export default class CommentReply extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: "",
            userReplyDisplayName: "",
            repliedDate: "",
            replyContent: "",
            likeData: ""
        }
    }
    componentDidMount() {
        let database = firebase.firestore();
        let storage = firebase.storage();
        database.collection("users").doc(this.props.reply.userId).get()
            .then((docRef) => {
                storage.ref("avatars/" + docRef.data().avatar).getDownloadURL()
                    .then((avatarUrl) => {
                        let createdAtDoc = convertTimestamp(this.props.reply.createdAt.seconds);
                        let createdAtRef = "";
                        if (createdAtDoc.getDurationToNow().daysAgo < 7) {
                            if (createdAtDoc.getDurationToNow().daysAgo > 0) {
                                createdAtRef = createdAtDoc.getDurationToNow().daysAgo + " ngày trước"
                            } else {
                                if (createdAtDoc.getDurationToNow().hoursAgo > 0) {
                                    createdAtRef = createdAtDoc.getDurationToNow().hoursAgo + " giờ trước"
                                } else {
                                    if (createdAtDoc.getDurationToNow().minutesAgo > 0) {
                                        createdAtRef = createdAtDoc.getDurationToNow().minutesAgo + " phút trước"
                                    } else {
                                        createdAtRef = createdAtDoc.getDurationToNow().secondsAgo + " giây trước"
                                    }
                                }
                            }
                        } else {
                            createdAtRef = createdAtDoc.formattedDate + " " + createdAtDoc.formattedTime
                        }
                        this.setState({
                            avatar: avatarUrl,
                            userReplyDisplayName: docRef.data().displayName,
                            repliedDate: createdAtRef,
                            replyContent: this.props.reply.replyContent,
                            likeData: this.props.reply.liked
                        })
                    })
            })
    }
    render() {
        return (
            <Row className="reply ml-5 mr-0">
                {this.state.avatar === "" ?
                    <Spinner animation="border" size="sm" className="mb-2" /> :
                    <Container className="reply-line px-2 my-1 mx-0">
                        <Row className="reply-line-content mx-0">
                            <div style={{ width: "65px" }} className="px-0">
                                <Image src={this.state.avatar} thumbnail roundedCircle className="avatar-reply" />
                            </div>
                            <div className="px-2 py-2 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="username-reply font-weight-bold">{this.state.userReplyDisplayName}</span>
                                    <span className="date-reply ml-2 text-secondary">{this.state.repliedDate}</span>
                                </div>
                                <span>{this.state.replyContent}</span>
                            </div>
                        </Row>
                        <Row className="reply-line-button pl-2">
                            <Button variant="link" className="text-button">Thích</Button>
                            <Button variant="link" className="text-button">Trả lời</Button>
                        </Row>
                    </Container>}
            </Row>
        )
    }
}