import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import { firebase } from "./../../../App";
import convertTimestamp from "./../../../resources/functions/convertTimestamp";

import CommentReply from "./../CommentReply";
import "./../../../styles/posts/CommentLine.css";
export default class CommentLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "",
            userCommentDisplayName: "",
            commentedDate: "",
            commentContent: "",
            likeData: "",
            replyData: {
                amount: "",
                user: []
            }
        }
    }
    componentDidMount() {
        let database = firebase.firestore();
        let storage = firebase.storage();
        database.collection("users").doc(this.props.comment.userId).get()
            .then((docRef) => {
                storage.ref("avatars/" + docRef.data().avatar).getDownloadURL()
                    .then((avatarUrl) => {
                        let createdAtDoc = convertTimestamp(this.props.comment.createdAt.seconds);
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
                            userCommentDisplayName: docRef.data().displayName,
                            commentedDate: createdAtRef,
                            commentContent: this.props.comment.commentContent,
                            likeData: this.props.comment.liked,
                            replyData: this.props.comment.reply
                        })
                    })
            })
    }
    render() {
        return (
            <Container className="comment-line-container" style={{ display: this.props.display }}>
                <Row className="comment-line px-2 py-2 my-2 ml-0 bg-light">
                    <Col className="pl-0">
                        <Row className="comment-line-content mx-0">
                            <Image src={this.state.avatar} thumbnail roundedCircle className="avatar-comment" />
                            <div className="px-2 py-2 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="username-comment font-weight-bold">{this.state.userCommentDisplayName}</span>
                                    <span className="date-comment ml-2 text-secondary">{this.state.commentedDate}</span>
                                </div>
                                <span>{this.state.commentContent}</span>
                            </div>
                        </Row>
                        <Row className="comment-line-button pl-2">
                            <Button variant="link" className="text-button">Thích</Button>
                            <Button variant="link" className="text-button">Trả lời</Button>
                        </Row>
                    </Col>
                </Row>
                {this.state.replyData.user.map((reply, i) => <CommentReply reply={reply} key={i} />)}
            </Container>
        );
    }
}