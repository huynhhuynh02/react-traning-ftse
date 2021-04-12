import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

import "./../../../styles/messages/MessageList.css"
import SearchBar from "./../../common/SearchBar";
class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList: "invidual"
        }
    }
    liftMessageId(message) {
        this.props.select(message)
    }
    render() {
        return (
            <Container fluid className="message-list">
                <Row className="mx-0 pt-4">
                    <SearchBar targetsearch="danh sách tin nhắn" />
                </Row>
                <Row className="mx-0">
                    <Col className="message-list-box mx-0 px-0">
                        {this.props.data.map((message, i) => {
                            return (
                                <Row className="message-list-item mx-0 mb-1 px-0" key={i}>
                                    <Col xs={12} className="px-0">
                                        <Button
                                            variant="light"
                                            className="item-button d-flex align-items-center px-4 w-100"
                                            onClick={this.liftMessageId.bind(this, message)}>
                                            <Col xs={3} className="d-flex justify-content-end px-0">
                                                <Image className="avatar-message" src={message.member[0].avatar} />
                                            </Col>
                                            <Col xs={9} className="d-flex flex-column justify-content-center align-items-start">
                                                <div className="name font-weight-bold">Test</div>
                                                <div className="chat-last">{message.chatList[message.chatList.length - 1].content}</div>
                                            </Col>
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default MessageList;