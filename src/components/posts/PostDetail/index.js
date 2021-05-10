import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentAlt, faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/posts/PostDetail.css";
import CommentLine from "./../CommentLine";
class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: this.props.postdata.isLike,
            showMoreComment: false
        }
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleMoreCommentClick = this.handleMoreCommentClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    handleLikeClick() {
        this.setState({
            isLike: !this.state.isLike
        })
    }
    handleMoreCommentClick() {
        this.setState({
            showMoreComment: !this.state.showMoreComment
        })
    }
    handleCloseClick() {
        this.props.close();
    }
    render() {
        return (
            <Jumbotron className="post-detail py-5">
                <Container fluid className="justify-content-between">
                    <Row className="mx-0">
                        <Col xs={6} className="thumbnail-field rounded">
                            <Row className="mx-0">
                                <Col className="thumbnail-list d-flex justify-content-center py-2 bg-secondary rounded">
                                    <Carousel interval={null} indicators={false}>
                                        {this.props.postdata.postThumbnails.map((thumbnail, i) => (
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
                                    <Image src={this.props.postdata.avatarUserPost} thumbnail roundedCircle className="avatar-post" />
                                </div>
                                <Col className="post-info py-2 d-flex flex-column justify-content-between align-items-left">
                                    <span className="user-name ml-0 my-auto">{this.props.postdata.displayNameUserPost}</span>
                                    <span className="date-upload ml-0 my-auto">{this.props.postdata.createdAt}</span>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col>
                                    <span className="post-content">{this.props.postdata.postContent}</span>
                                </Col>
                            </Row>
                            <Row className="align-item-center pt-3 mx-0 mb-1">
                                <Col xs={4} className="like-info text-left text-primary">
                                    <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                                    <span className="amount pr-2 justify-content-left">
                                        {this.state.isLike ? "Bạn và " + this.props.postdata.likedInfo.amount + " người khác" : this.props.postdata.likedInfo.amount}
                                    </span>
                                </Col>
                                <Col xs={4} className="comment-info text-center text-secondary">
                                    <FontAwesomeIcon icon={faCommentAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.props.postdata.commentedInfo.amount}</span>
                                </Col>
                                <Col xs={4} className="share-info text-right text-success">
                                    <FontAwesomeIcon icon={faShareAlt} className="mr-1" />
                                    <span className="amount justify-content-center">{this.props.postdata.sharedInfo.amount}</span>
                                </Col>
                            </Row>
                            <Row className="mx-0">
                                <Col className="comment-box bg-white px-0">
                                    <Row className="buttons mx-0 justify-content-between">
                                        <Col className="text-info text-center px-0">
                                            <button
                                                className={this.state.isLike ? "like-button post-liked w-100 py-2 text-light" : "like-button w-100 py-2 text-light"}
                                                onClick={this.handleLikeClick}>
                                                <span className="px-2">Thích</span>
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                            </button>
                                        </Col>
                                        <Col className="text-info text-center px-0">
                                            <button className="comment-button w-100 py-2 text-light">
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
                                            this.props.postdata.commentedInfo.userCommented.map((comment, i) => {
                                                return (
                                                    i === (this.props.postdata.commentedInfo.userCommented.length - 1) ?
                                                        <CommentLine comment={comment} display="block" key={i} /> :
                                                        this.state.showMoreComment ?
                                                            <CommentLine comment={comment} display="block" key={i} /> :
                                                            <CommentLine comment={comment} display="none" key={i} />
                                                )
                                            })
                                        }
                                    </Row>
                                    {
                                        this.props.postdata.commentedInfo.amount > 1 ?
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