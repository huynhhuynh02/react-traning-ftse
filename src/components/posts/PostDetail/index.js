import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentAlt, faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";
import convertTimestamp from "./../../../resources/functions/convertTimestamp";

import "./../../../styles/posts/PostDetail.css";
import CommentLine from "./../CommentLine";
import avatarDemo from "./../../../resources/images/avatar.jpg";
class PostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOwner: false,
            avatarUserPost: "",
            displayNameUserPost: "",
            createdAt: "",
            likedInfo: {
                amount: "",
                userLiked: []
            },
            commentedInfo: {
                amount: "",
                userCommented: []
            },
            sharedInfo: {
                amount: "",
                userShared: []
            },
            postContent: "",
            postThumbnails: [],
            likeState: {
                before: false,
                current: false
            },
            commentState: {
                showCommentInput: false,
                showMoreComment: false
            },
            editState: {
                isEditing: false,
                isChangesUploaded: false
            },
            deleteState: {
                isDeletingPost: false,
                isPostDeleted: false
            },
            redirectToPostPage: false,
            isUpdatingState: false
        }

        this.textCommentInput = React.createRef();

        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
        this.handleAddCommentIntoDatabase = this.handleAddCommentIntoDatabase.bind(this);
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
                    if (docPosts.data().userId === userId) this.setState({ isOwner: true });
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
                    this.setState({
                        likedInfo: docPosts.data().liked,
                        createdAt: createdAtRef,
                        commentedInfo: {
                            amount: docPosts.data().commented.amount,
                            userCommented: docPosts.data().commented.userCommented.reverse()
                        },
                        sharedInfo: docPosts.data().shared,
                        postContent: docPosts.data().textContent
                    })
                    docPosts.data().liked.userLiked.forEach(id => {
                        if (id === userId) {
                            this.setState({
                                likeState: {
                                    before: true,
                                    current: true
                                },
                                likedInfo: {
                                    amount: docPosts.data().liked.amount - 1,
                                    userLiked: docPosts.data().userLiked
                                }
                            })
                        }
                    })
                    docPosts.data().thumbnails.forEach((thumbnail) => {
                        storage.ref(thumbnail.type + "s/" + thumbnail.data).getDownloadURL()
                            .then((thumbnailUrl) => {
                                this.setState({
                                    postThumbnails: this.state.postThumbnails.concat([{
                                        url: thumbnailUrl,
                                        data: thumbnail.data,
                                        type: thumbnail.type
                                    }])
                                })
                            }).catch((error) => console.log("Error getting thumbnails: ", error));
                    })
                    database.collection("users").doc(docPosts.data().userId).get()
                        .then((docUsers) => {
                            if (docUsers.data().avatar !== undefined) {
                                storage.ref("avatars/" + docUsers.data().avatar).getDownloadURL()
                                    .then((avatarUrl) => {
                                        this.setState({
                                            displayNameUserPost: docUsers.data().displayName,
                                            avatarUserPost: avatarUrl
                                        });
                                    }).catch(error => console.log("Error getting avatar from storage: ", error))
                            } else {
                                this.setState({
                                    displayNameUserPost: docUsers.data().displayName,
                                    avatarUserPost: avatarDemo
                                });
                            }
                        }).catch(error => console.log("Error getting from firestore: ", error));
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No (posts) such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            })
    }
    componentDidUpdate() {
        if (!this.state.isPostDeleted && this.textCommentInput.current !== null) {
            if (this.state.commentState.showCommentInput !== false) {
                this.textCommentInput.current.scrollIntoView();
                this.textCommentInput.current.focus();
            } else {
                this.textCommentInput.current.blur();
            }
            if (this.state.isUpdatingState) {
                const database = firebase.firestore();
                const storage = firebase.storage();
                database.collection("posts").doc(this.props.postdata).get()
                    .then((doc) => {
                        if (doc.exists) {
                            this.setState({
                                likedInfo: {
                                    amount: this.state.likeState.current ? doc.data().liked.amount - 1 : doc.data().liked.amount,
                                    userLiked: doc.data().liked.userLiked
                                },
                                commentedInfo: {
                                    amount: doc.data().commented.amount,
                                    userCommented: doc.data().commented.userCommented.reverse()
                                },
                                sharedInfo: doc.data().shared,
                                isUpdatingState: false
                            })
                            if (this.state.postContent !== doc.data().textContent || this.state.postThumbnails.length !== doc.data().thumbnails.length) {
                                this.setState({
                                    postContent: doc.data().textContent,
                                    postThumbnails: [],
                                })
                                doc.data().thumbnails.forEach((thumbnail) => {
                                    storage.ref(thumbnail.type + "s/" + thumbnail.data).getDownloadURL()
                                        .then((thumbnailUrl) => {
                                            this.setState({
                                                postThumbnails: this.state.postThumbnails.concat([{
                                                    url: thumbnailUrl,
                                                    data: thumbnail.data,
                                                    type: thumbnail.type
                                                }])
                                            })
                                            console.log("State post's info has been updated");
                                        }).catch((error) => console.log("Error getting thumbnails: ", error));
                                })
                            } else console.log("State post's info has been updated");
                        } else console.log("Document for updating state's not found");
                    }).catch(error => console.log("Error while updating post state from database: ", error));
            }
        }
    }
    handleLikeClick() {
        clearTimeout(this.delaySetLike);
        this.setState({
            likeState: {
                before: this.state.likeState.before,
                current: !this.state.likeState.current
            }
        })
        this.delaySetLike = setTimeout(() => {
            if (this.state.likeState.current !== this.state.likeState.before) {
                const database = firebase.firestore();
                const userId = localStorage.getItem("id");
                database.collection("posts").doc(this.props.postdata).get()
                    .then((doc) => {
                        if (doc.exists) {
                            if (this.state.likeState.current) {
                                if (doc.data().liked.userLiked.find((id) => { return id === userId; }) === undefined) {
                                    database.collection("posts").doc(this.props.postdata)
                                        .update({
                                            liked: {
                                                amount: doc.data().liked.amount + 1,
                                                userLiked: doc.data().liked.userLiked.concat([userId])
                                            }
                                        }).then(() => {
                                            this.setState({
                                                likeState: {
                                                    before: this.state.likeState.current,
                                                    current: this.state.likeState.current
                                                },
                                                isUpdatingState: true
                                            });
                                            console.log("Document (like) successfully updated!");
                                        }).catch(error => console.log("Error while setting like database: ", error));
                                }
                            } else {
                                if (doc.data().liked.userLiked.find((id) => { return id === userId; }) !== undefined) {
                                    let refData = doc.data().liked.userLiked
                                    refData.splice(refData.indexOf(userId), 1)
                                    database.collection("posts").doc(this.props.postdata)
                                        .update({
                                            liked: {
                                                amount: doc.data().liked.amount - 1,
                                                userLiked: refData
                                            }
                                        }).then(() => {
                                            this.setState({
                                                likeState: {
                                                    before: this.state.likeState.current,
                                                    current: this.state.likeState.current
                                                },
                                                isUpdatingState: true
                                            });
                                            console.log("Document (like) successfully updated!");
                                        }).catch(error => console.log("Error while setting like database: ", error));
                                }
                            }
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No (posts) such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    })
            }
        }, 2000)
    }
    handleCommentClick() {
        this.setState({
            commentState: {
                showCommentInput: !this.state.commentState.showCommentInput,
                showMoreComment: this.state.commentState.showMoreComment
            }
        })
    }
    handleAddCommentIntoDatabase(e) {
        if (e.key === "Enter" && e.target.value !== "") {
            const database = firebase.firestore();
            const userId = localStorage.getItem("id");
            const now = new Date();
            database.collection("posts").doc(this.props.postdata).get()
                .then((doc) => {
                    if (doc.exists) {
                        let newComment = {
                            commentContent: e.target.value,
                            createdAt: now,
                            liked: [],
                            replied: {
                                amount: 0,
                                userReplied: []
                            },
                            userId: userId
                        }
                        database.collection("posts").doc(this.props.postdata)
                            .update({
                                "commented.amount": doc.data().commented.amount + 1,
                                "commented.userCommented": doc.data().commented.userCommented.concat([newComment])
                            }).then(() => console.log("Document (comment) successfully updated!")
                            ).catch(error => console.log("Error while updating database: ", error));
                        this.setState({
                            commentState: {
                                showCommentInput: !this.state.commentState.showCommentInput,
                                showMoreComment: this.state.commentState.showMoreComment
                            },
                            isUpdatingState: true
                        });
                        e.target.value = "";
                    } else console.log("Document not found");
                }).catch((error) => console.log("Error while getting database: ", error))
        }
    }
    handleMoreCommentClick() {
        this.setState({
            commentState: {
                showCommentInput: this.state.commentState.showCommentInput,
                showMoreComment: !this.state.commentState.showMoreComment
            }
        })
    }
    handlePostDetailClick() {
        this.setState({
            redirectToPostPage: true
        })
    }
    handlePostEdit(isEditPostOpened, isUploadChangeFinished) {
        this.setState({
            editState: {
                isEditing: isEditPostOpened,
                isChangesUploaded: isUploadChangeFinished
            }
        })
    }
    handlePostDelete() {
        if (window.confirm("Bạn muốn xoá bài viết này sao?")) {
            this.setState({
                deleteState: {
                    isDeletingPost: true,
                    isPostDeleted: this.state.deleteState.isPostDeleted
                }
            })
            const userId = localStorage.getItem("id");
            const postId = this.props.postdata;
            const database = firebase.firestore();
            const storage = firebase.storage();
            database.collection("users").doc(userId).get()
                .then((userData) => {
                    let postList = userData.data().postList;
                    postList.splice(postList.indexOf(postId));
                    database.collection("users").doc(userId).update({
                        postList: postList
                    }).then(() => {
                        console.log("Removed post id " + postId + " from user data: ", postId);
                        database.collection("posts").doc(postId).get()
                            .then((postData) => {
                                let filesInPost = postData.data().thumbnails;
                                database.collection("posts").doc(postId).delete()
                                    .then(() => {
                                        console.log("Removed doc " + postId + " in posts collection");
                                        let storageRef = storage.ref();
                                        if (filesInPost.length !== 0) {
                                            filesInPost.forEach((file) => {
                                                storageRef.child(file.type + "s/" + file.data).delete()
                                                    .then(() => {
                                                        console.log("Deleted file " + file.data + " in folder " + file.type + "s");
                                                        this.setState({
                                                            deleteState: {
                                                                isDeletingPost: false,
                                                                isPostDeleted: true
                                                            }
                                                        });
                                                    }).catch((error) => {
                                                        console.log("Error while deleting file " + file.type + "s/" + file.data, error);
                                                    })
                                            })
                                        } else {
                                            this.setState({
                                                deleteState: {
                                                    isDeletingPost: false,
                                                    isPostDeleted: true
                                                }
                                            });
                                        }
                                    }).catch(error => {
                                        console.log("Error while removing post doc: ", postId, error);
                                    })
                            }).catch(error => {
                                console.log("Error getting data of post about to delete", error);
                            })
                    }).catch(error => {
                        console.log("Error while removing post id from user data", error);
                    })
                }).catch((error) => {
                    console.log("Error getting user data id: " + userId, error);
                })
        }
    }
    render() {
        return (
            <Jumbotron className="post-detail py-5">
                <Container fluid className="justify-content-between">
                    <Row className="mx-0">
                        <Col xs={6} className="thumbnail-field d-flex align-items-center rounded">
                            <Row className="mx-0 h-100" >
                                <Col className="thumbnail-list d-flex justify-content-center py-2 bg-secondary rounded h-100">
                                    <Carousel interval={null} indicators={false}>
                                        {this.state.postThumbnails.map((thumbnail, i) => (
                                            <Carousel.Item key={i}>
                                                {
                                                    thumbnail.type === "video" ?
                                                        <video className="post-thumbnail" src={thumbnail.url} controls></video> :
                                                        <Image src={thumbnail.url} thumbnail rounded className="post-thumbnail" />
                                                }
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className="info-field py-3 bg-light rounded">
                            <Row className="mx-0 align-items-center">
                                <div className="px-0">
                                    <Image src={this.state.avatarUserPost} thumbnail roundedCircle className="avatar-post" />
                                </div>
                                <Col className="post-info py-2 d-flex flex-column justify-content-between align-items-left">
                                    <span className="user-name ml-0 my-auto">{this.state.displayNameUserPost}</span>
                                    <span className="date-upload ml-0 my-auto">{this.state.createdAt}</span>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <span className="post-content">{this.state.postContent}</span>
                                </Col>
                            </Row>
                            <Row className="align-item-center pt-3 mx-0 mb-1">
                                <Col xs={4} className="like-info text-left text-primary">
                                    <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                                    <span className="amount pr-2 justify-content-left">
                                        {this.state.likeState.current ? "Bạn và " + this.state.likedInfo.amount + " người khác" : this.state.likedInfo.amount}
                                    </span>
                                </Col>
                                <Col xs={4} className="comment-info text-center text-secondary">
                                    <FontAwesomeIcon icon={faCommentAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.state.commentedInfo.amount}</span>
                                </Col>
                                <Col xs={4} className="share-info text-right text-success">
                                    <FontAwesomeIcon icon={faShareAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.state.sharedInfo.amount}</span>
                                </Col>
                            </Row>
                            <Row className="mx-0">
                                <Col className="comment-box bg-white px-0">
                                    <Row className="buttons mx-0 justify-content-between">
                                        <Col className="text-info text-center px-0">
                                            <button
                                                className={this.state.likeState.current ? "like-button post-liked w-100 py-2 text-light" : "like-button w-100 py-2 text-light"}
                                                onClick={this.handleLikeClick}>
                                                <span className="px-2">Thích</span>
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                            </button>
                                        </Col>
                                        <Col className="text-info text-center px-0">
                                            <button
                                                className="comment-button w-100 py-2 text-light"
                                                onClick={this.handleCommentClick}>
                                                <span className="px-2">Bình luận</span>
                                                <FontAwesomeIcon icon={faCommentAlt} />
                                            </button>
                                        </Col>
                                        <Col className="text-info text-center px-0">
                                            <button className="share-button w-100 py-2 text-light">
                                                <span className="px-2">Chia sẻ</span>
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
                                                            <Button variant="link" className="text-button text-danger" onClick={this.handleMoreCommentClick}>Ẩn bớt bình luận ...</Button>
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
                        </Col>
                    </Row>
                </Container>
                <Button
                    onClick={() => window.history.back()}
                    className="close-post-detail"
                    variant="danger">
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </Button>
            </Jumbotron>
        );
    }
}


export default PostDetail;