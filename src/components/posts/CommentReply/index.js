import React from 'react';

import { Container, Row, Image, Button } from "react-bootstrap";

import "./../../../styles/posts/CommentReply.css"
class CommentReply extends React.Component {
    render() {
        const replyData = this.props.replydata
        return (
            replyData.map((reply, i) => {
                return (
                    <Container className="reply-line px-2 my-1 mx-0" key={i}>
                        <Row className="reply-line-content mx-0">
                            <div className="px-2">
                                <Image src={reply.user.avatar} roundedCircle className="avatar-reply" />
                            </div>
                            <div className="px-2 py-1 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="username-reply font-weight-bold">{reply.user.username}</span>
                                    <span className="date-reply ml-2 text-secondary">{reply.dateRep}</span>
                                </div>
                                <span>{reply.content}</span>
                            </div>
                        </Row>
                        <Row className="reply-line-button">
                            <Button variant="link" className="text-button">Thích</Button>
                            <Button variant="link" className="text-button">Trả lời</Button>
                        </Row>
                    </Container>
                )
            })
        );
    }
}


export default CommentReply;