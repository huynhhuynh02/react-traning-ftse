import React from 'react';
import { Col, Container, Row, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSmile, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/messages/ChatBox.css";
import ChatLine from "./../ChatLine";
class ChatBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOnline: true
        }
    }
    render() {
        if (this.props.data !== "") {
            return (
                <>
                    <Container className="chat-box px-0">
                        <Row className="chat-user-info mx-0 px-3 py-3">
                            <Col xs={10}>
                                <Row>
                                    <Col xs={3} className="d-flex justify-content-end">
                                        <Image className="avatar-chat" thumbnail roundedCircle src={this.props.data.member[0].avatar} />
                                    </Col>
                                    <Col xs={9} className="d-flex flex-column justify-content-center align-items-start">
                                        <div className="chat-name font-weight-bold">{this.props.data.member[0].username}</div>
                                        <div className="chat-status">
                                            <div
                                                className="d-inline-block status-dot mr-2"
                                                style={{ backgroundColor: this.state.isOnline ? "green" : "red" }}>
                                            </div>
                                            <span
                                                className="status-text"
                                                style={{ color: this.state.isOnline ? "green" : "red" }}
                                            >
                                                {this.state.isOnline ? "Online" : "Offline"}
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={2} className="d-flex justify-content-center align-items-center px-0">
                                <Button className="chat-settings-btn" variant="light">
                                    <FontAwesomeIcon icon={faCog} size="lg" />
                                </Button>
                            </Col>
                        </Row>
                        <Row className="chat-line-list mx-0 pt-3 pb-5">
                            <Col xs={12}>
                                <ChatLine
                                    sender="friend"
                                    bubbleColor="#F3F3F3"
                                    textColor="#000000"
                                    fontSize="14px"
                                    content={this.props.data.chatList[0].content}
                                    avatar={this.props.data.avatar}
                                />
                                <ChatLine
                                    sender="owner"
                                    bubbleColor="#007BFF"
                                    textColor="#FFFFFF"
                                    fontSize="14px"
                                    content={this.props.data.chatList[1].content}
                                    avatar={this.props.data.avatar}
                                />
                            </Col>
                        </Row>
                        <Row className="chat-input mx-0 mb-2 px-3">
                            <Col xs={12} className="px-0">
                                <InputGroup className="chat-input-field mx-0">
                                    <InputGroup.Prepend id="messageInput">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faSmile} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Write a message"
                                        aria-label="Search Bar"
                                        aria-describedby="messageInput"
                                    />
                                    <InputGroup.Append id="messageInput">
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faCaretRight} />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        } else {
            return (
                <>
                    <Container
                        className="px-0"
                    >
                        <Row className="mx-0">
                            <Col xs={12} className="d-flex align-items-center px-2">
                                <span
                                    style={{
                                        fontSize: "40px",
                                        color: "#CBCBCB",
                                    }}
                                >
                                    Chọn một đoạn hội thoại
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        }
    }
}


export default ChatBox;