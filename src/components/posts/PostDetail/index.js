import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentAlt, faShareAlt, faTimes, faHome } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/posts/PostDetail.css";
import CommentLine from "./../CommentLine";

class PostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenedDirectly: false,
            showPostDetailComment: false
        }
        this.textCommentInputPostDetail = React.createRef();
        this.triggerCommentInput = this.triggerCommentInput.bind(this);
    }
    componentDidMount() {
        // set search tag for url and lock scroll of body if search tag is empty
        if (window.location.search === "") {
            const url = new URL(window.location);
            url.searchParams.set('postId', this.props.postid);
            window.history.pushState({}, '', url);
            this.setState({ isOpenedDirectly: true });
        }
        document.body.style.overflow = "hidden"
        // close PostDetail and unlock sroll of body when popstate is fired (go back)
        window.onpopstate = () => {
            this.props.openAndClose(false);
            document.body.style.overflow = "scroll"
        }
    }
    triggerCommentInput() {
        this.setState({ showPostDetailComment: !this.state.showPostDetailComment });
    }
    render() {
        return (
            <Jumbotron className="post-detail py-5">
                <Container fluid className="justify-content-between">
                    <Row className="mx-0">
                        {this.props.poststate.postThumbnails.length > 0 ?
                            <Col className="thumbnail-field d-flex align-items-center rounded">
                                <Row className="mx-0 h-100" >
                                    <Col className="thumbnail-list d-flex justify-content-center py-2 bg-secondary rounded h-100">
                                        <Carousel interval={null} indicators={false}>
                                            {this.props.poststate.postThumbnails.map((thumbnail, i) => (
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
                            </Col> :
                            <></>}
                        <Col className="info-field py-3 bg-light rounded">
                            <Row className="mx-0 align-items-center">
                                <div className="px-0">
                                    <Image src={this.props.poststate.avatarUserPost} thumbnail roundedCircle className="avatar-post" />
                                </div>
                                <Col className="post-info py-2 d-flex flex-column justify-content-between align-items-left">
                                    <span className="user-name ml-0 my-auto">{this.props.poststate.displayNameUserPost}</span>
                                    <span className="date-upload ml-0 my-auto">{this.props.poststate.createdAt}</span>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <span className="post-content">{this.props.poststate.postContent}</span>
                                </Col>
                            </Row>
                            <Row className="align-item-center pt-3 mx-0 mb-1">
                                <Col xs={4} className="like-info text-left text-primary">
                                    <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                                    <span className="amount pr-2 justify-content-left">
                                        {this.props.poststate.likeState.current ? "Bạn và " + this.props.poststate.likedInfo.amount + " người khác" : this.props.poststate.likedInfo.amount}
                                    </span>
                                </Col>
                                <Col xs={4} className="comment-info text-center text-secondary">
                                    <FontAwesomeIcon icon={faCommentAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.props.poststate.commentedInfo.amount}</span>
                                </Col>
                                <Col xs={4} className="share-info text-right text-success">
                                    <FontAwesomeIcon icon={faShareAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.props.poststate.sharedInfo.amount}</span>
                                </Col>
                            </Row>
                            <Row className="mx-0">
                                <Col className="comment-box bg-white px-0">
                                    <Row className="buttons mx-0 justify-content-between">
                                        <Col className="text-info text-center px-0">
                                            <button
                                                className={this.props.poststate.likeState.current ? "like-button post-liked w-100 py-2 text-light" : "like-button w-100 py-2 text-light"}
                                                onClick={() => this.props.handleLike()}>
                                                <span className="px-2">Thích</span>
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                            </button>
                                        </Col>
                                        <Col className="text-info text-center px-0">
                                            <button
                                                className="comment-button w-100 py-2 text-light"
                                                onClick={this.triggerCommentInput}>
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
                                        <Col xs={12} className={(this.state.showPostDetailComment ? "" : "d-none") + " py-1"}>
                                            <input
                                                ref={this.textCommentInputPostDetail}
                                                className="comment-input-detail px-3 py-1"
                                                placeholder="Nhập bình luận"
                                                onKeyPress={(e) => this.props.handleComment(e)} />
                                        </Col>
                                        {
                                            this.props.poststate.commentedInfo.userCommented.map((comment, i) => {
                                                if (i === 0) return <CommentLine comment={comment} display="block" key={i} />
                                                else return (
                                                    this.props.poststate.commentState.showMoreComment ?
                                                        <CommentLine comment={comment} display="block" key={i} /> :
                                                        <CommentLine comment={comment} display="none" key={i} />
                                                )
                                            })
                                        }
                                    </Row>
                                    {
                                        this.props.poststate.commentedInfo.amount > 1 ?
                                            <Row className="more-comment mx-0">
                                                <Col className="d-flex justify-content-end px-0">
                                                    {
                                                        this.props.poststate.showMoreComment ?
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
                {this.state.isOpenedDirectly ?
                    <Button
                        onClick={() => {
                            this.props.openAndClose(false);
                            document.body.style.overflow = "scroll";
                            window.history.back();
                        }}
                        className="close-post-detail"
                        variant="danger">
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button> :
                    <Button
                        onClick={() => {
                            this.props.openAndClose(false);
                            document.body.style.overflow = "scroll";
                            window.location.assign("/");
                        }}
                        className="close-post-detail"
                        variant="primary">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </Button>}
            </Jumbotron>
        );
    }
}


export default PostDetail;