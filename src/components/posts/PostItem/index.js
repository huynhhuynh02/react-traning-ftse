import React from 'react';
import { Container, Image, Jumbotron, Col, Row, Button, Spinner, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faThumbsUp, faCommentAlt, faShareAlt, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";
import convertTimestamp from "./../../../resources/functions/convertTimestamp";

import "./../../../styles/posts/PostItem.css";
import CommentLine from "./../CommentLine";
import PostDetail from "./../PostDetail";
class PostItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLike: false,
            showDetail: false,
            showMoreComment: false,
            avatarUserPost: "",
            displayNameUserPost: "",
            createdAt: "",
            likedInfo: {
                amount: 0,
                userLiked: []
            },
            commentedInfo: {
                amount: 0,
                userCommented: []
            },
            sharedInfo: {
                amount: 0,
                userShared: []
            },
            postContent: "",
            postThumbnails: []
        }
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handlePostDetailClick = this.handlePostDetailClick.bind(this);
        this.handleMoreCommentClick = this.handleMoreCommentClick.bind(this);
        this.handlePostDelete = this.handlePostDelete.bind(this);
    }
    componentDidMount() {
        const userId = localStorage.getItem("id");
        const database = firebase.firestore();
        const storage = firebase.storage();
        database.collection("posts").doc(this.props.postdata).get()
            .then((docPosts) => {
                if (docPosts.exists) {
                    docPosts.data().liked.userLiked.forEach(id => {
                        if (id === userId) this.setState({ isLike: true });
                    })
                    let createdAtDoc = convertTimestamp(docPosts.data().createdAt.seconds);
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
                    database.collection("users").doc(docPosts.data().userId).get()
                        .then((docUsers) => {
                            storage.ref("avatars/" + docUsers.data().avatar).getDownloadURL()
                                .then((avatarUrl) => {
                                    this.setState({
                                        avatarUserPost: avatarUrl,
                                        displayNameUserPost: docUsers.data().displayName,
                                        createdAt: createdAtRef,
                                        likedInfo: docPosts.data().liked,
                                        commentedInfo: docPosts.data().commented,
                                        sharedInfo: docPosts.data().shared,
                                        postContent: docPosts.data().textContent,
                                    });
                                    docPosts.data().thumbnails.forEach((thumbnail) => {
                                        storage.ref(thumbnail.type + "s/" + thumbnail.data).getDownloadURL()
                                            .then((thumbnailUrl) => {
                                                this.state.postThumbnails.push(thumbnailUrl)
                                                this.setState({
                                                    postThumbnails: this.state.postThumbnails
                                                })
                                            }).catch((error) => console.log("Error getting thumbnails: ", error));
                                    })
                                }).catch(error => console.log("Error getting avatar from storage: ", error))
                        }).catch(error => console.log("Error getting from firestore: ", error));
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No (posts) such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            })
    }
    handleLikeClick() {
        this.setState({
            isLike: !this.state.isLike
        })
    }
    handlePostDetailClick() {
        this.setState({
            showDetail: !this.state.showDetail
        })
    }
    handleMoreCommentClick() {
        this.setState({
            showMoreComment: !this.state.showMoreComment
        })
    }
    handlePostDelete() {

    }
    render() {
        return (
            <Jumbotron className="post-item py-5">
                <Container fluid className="justify-content-between">
                    <Row className="mx-0">
                        <Col xs={2} className="pl-0">
                            {
                                this.state.avatarUserPost === "" ?
                                    <Spinner animation="border" variant="secondary" />
                                    :
                                    <Image src={this.state.avatarUserPost} thumbnail roundedCircle className="avatar-post" />
                            }
                        </Col>
                        <Col xs={8} className="post-info py-2 d-flex flex-column justify-content-between align-items-left">
                            <span className="user-name ml-0 my-auto">{this.state.displayNameUserPost}</span>
                            <span className="date-upload ml-0 my-auto">{this.state.createdAt}</span>
                        </Col>
                        <Col xs={2} className="d-flex justify-content-end py-3 pr-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="post-settings-btn">
                                    <FontAwesomeIcon icon={faCog} size="lg" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" />
                                        Chỉnh sửa bài viết
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon={faTrashAlt} size="lg" className="mr-2" />
                                        Xoá bỏ bài viết
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <span className="post-content">{this.state.postContent}</span>
                        </Col>
                    </Row>
                    <Row className="mx-0">
                        <Col className="thumbnail-list d-flex justify-content-center py-2">
                            {this.state.postThumbnails.map((thumbnail, i) =>
                                <Col key={i}>
                                    <Image src={thumbnail} thumbnail className="post-thumbnail" onClick={this.handlePostDetailClick} />
                                </Col>
                            )}
                        </Col>
                    </Row>
                    <Row className="align-item-center pt-3 mx-0 mb-1">
                        <Col xs={4} className="like-info text-left text-primary">
                            <span className="amount pr-2 justify-content-left">{this.state.likedInfo.amount}</span>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </Col>
                        <Col xs={4} className="comment-info text-center text-secondary">
                            <span className="amount pr-2 justify-content-center">{this.state.commentedInfo.amount}</span>
                            <FontAwesomeIcon icon={faCommentAlt} />
                        </Col>
                        <Col xs={4} className="share-info text-right text-success">
                            <span className="amount pr-2 justify-content-center">{this.state.sharedInfo.amount}</span>
                            <FontAwesomeIcon icon={faShareAlt} />
                        </Col>
                    </Row>
                    <Row className="mx-0">
                        <Col className="comment-box bg-white px-0">
                            <Row className="buttons mx-0 justify-content-between">
                                <Col className="text-info text-center px-0">
                                    <button
                                        className={this.state.isLike ? "like-button post-liked w-100 py-2 text-light" : "like-button w-100 py-2 text-light"}
                                        onClick={this.handleLikeClick}>
                                        <span className="amount px-2 font-weight-bold">Thích</span>
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </button>
                                </Col>
                                <Col className="text-info text-center px-0">
                                    <button className="comment-button w-100 py-2 text-light">
                                        <span className="amount px-2 font-weight-bold">Bình luận</span>
                                        <FontAwesomeIcon icon={faCommentAlt} />
                                    </button>
                                </Col>
                                <Col className="text-info text-center px-0">
                                    <button className="share-button w-100 py-2 text-light">
                                        <span className="amount px-2 font-weight-bold">Chia sẻ</span>
                                        <FontAwesomeIcon icon={faShareAlt} />
                                    </button>
                                </Col>
                            </Row>
                            <Row className="comment-list mx-0 py-3 px-3">
                                {
                                    this.state.commentedInfo.userCommented.map((comment, i) => {
                                        return (
                                            i === (this.state.commentedInfo.userCommented.length - 1) ?
                                                <CommentLine comment={comment} display="block" key={i} /> :
                                                this.state.showMoreComment ?
                                                    <CommentLine comment={comment} display="block" key={i} /> :
                                                    <CommentLine comment={comment} display="none" key={i} />
                                        )
                                    })
                                }
                            </Row>
                            {
                                this.state.commentedInfo.amount > 1 ?
                                    <Row className="more-comment mx-0">
                                        <Col className="d-flex justify-content-end px-0">
                                            {
                                                this.state.showMoreComment ?
                                                    <></>
                                                    :
                                                    <Button variant="link" className="text-button text-danger" onClick={this.handleMoreCommentClick}>Xem thêm bình luận ...</Button>
                                            }
                                        </Col>
                                    </Row>
                                    :
                                    <></>
                            }
                        </Col>
                    </Row>
                </Container>
                {this.state.avatarUserPost === "" ? <></> : <PostDetail postdata={this.state} display={this.state.showDetail} close={this.handlePostDetailClick} />}
            </Jumbotron>
        );
    }
}


export default PostItem;