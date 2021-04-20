import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faThumbsUp, faCommentAlt, faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/posts/PostDetail.css";
import CommentReply from "./../CommentReply";
class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: this.props.postdata.isLike
        }
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    handleLikeClick() {
        this.setState({
            isLike: !this.state.isLike
        })
    }
    handleCloseClick() {
        const closeDetail = this.props.close
        closeDetail()
    }
    render() {
        const postData = this.props.postdata;
        return (
            <Jumbotron className={"post-detail py-5 " + (this.props.display ? "d-block" : "d-none")}>
                <Container fluid className="justify-content-between">
                    <Row className="mx-0">
                        <Col xs={6}>
                            <Row className="mx-0">
                                <Col className="thumbnail-list d-flex justify-content-center py-2 bg-secondary rounded">
                                    <Carousel interval={null} indicators={false}>
                                        {postData.thumbnails.images.map((item, i) => (
                                            <Carousel.Item key={i}>
                                                <Image src={item} thumbnail className="post-thumbnail" />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className="py-3 bg-light rounded">
                            <Row className="mx-0">
                                <Col xs={2} className="pl-0">
                                    <Image src={postData.user.avatar} roundedCircle className="avatar-post" />
                                </Col>
                                <Col xs={8} className="post-info py-2 d-flex flex-column justify-content-between align-items-left">
                                    <span className="user-name ml-0 my-auto">{postData.user.username}</span>
                                    <span className="date-upload ml-0 my-auto">{postData.createdAt}</span>
                                </Col>
                                <Col xs={2} className="d-flex justify-content-end py-3 pr-0">
                                    <Button className="post-settings-btn" variant="light">
                                        <FontAwesomeIcon icon={faCog} size="lg" />
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <span className="post-content">{postData.textContent}</span>
                                </Col>
                            </Row>
                            <Row className="align-item-center pt-3 mx-0 mb-1">
                                <Col xs={4} className="like-info text-left text-primary">
                                    <span className="amount pr-2 justify-content-left">{postData.infoAmount.likes}</span>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </Col>
                                <Col xs={4} className="comment-info text-center text-secondary">
                                    <span className="amount pr-2 justify-content-center">{postData.infoAmount.comments}</span>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </Col>
                                <Col xs={4} className="share-info text-right text-success">
                                    <span className="amount pr-2 justify-content-center">{postData.infoAmount.shares}</span>
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
                                        {postData.comments.map((comment, i) => {
                                            return (
                                                <Container key={i}>
                                                    <Row className="comment-line px-2 py-2 my-2 ml-0 bg-light">
                                                        <Col className="pl-0">
                                                            <Row className="comment-line-content mx-0">
                                                                <div className="px-2">
                                                                    <Image src={comment.user.avatar} roundedCircle className="avatar-comment" />
                                                                </div>
                                                                <div className="px-2 py-1 d-flex flex-column justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="username-comment font-weight-bold">{comment.user.username}</span>
                                                                        <span className="date-comment ml-2 text-secondary">{comment.dateCmt}</span>
                                                                    </div>
                                                                    <span>{comment.user.content}</span>
                                                                </div>
                                                            </Row>
                                                            <Row className="comment-line-button pl-2">
                                                                <Button variant="link" className="text-button">Thích</Button>
                                                                <Button variant="link" className="text-button">Trả lời</Button>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row className="reply ml-5 mr-0">
                                                        <CommentReply replydata={comment.reply} />
                                                    </Row>
                                                </Container>
                                            )
                                        })}
                                    </Row>
                                    <Row className="more-comment mx-0">
                                        <Col className="d-flex justify-content-end px-0">
                                            <Button variant="link" className="text-button text-danger">Xem thêm bình luận ...</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Button
                    className="close-post-detail"
                    variant="danger"
                    onClick={this.handleCloseClick}>
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </Button>
            </Jumbotron>
        );
    }
}


export default PostDetail;