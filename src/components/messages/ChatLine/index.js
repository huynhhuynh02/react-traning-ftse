import React from 'react';
import { Image, Row } from "react-bootstrap";

import "./../../../styles/messages/ChatLine.css";
class ChatLine extends React.Component {
    render() {
        if (this.props.sender === "friend") {
            return (
                <Row className="chat-line friend d-flex justify-content-start mx-0 mb-3">
                    <Image className="avatar-chat-line" thumbnail roundedCircle src={this.props.avatar} />
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25999 12.0113L25.8221 11.3879L16.7115 29.1008L5.25999 12.0113Z" fill="#F3F3F3" />
                    </svg>
                    <span
                        className="chat-line-text mt-3 px-3 py-2"
                        style={{
                            width: "fit-content",
                            maxWidth: "calc(100% - 73px - 26px - 80px)",
                            height: "fit-content",
                            color: "#000000",
                            fontSize: "14px",
                            backgroundColor: "#F3F3F3"
                        }}
                    >
                        {this.props.content}
                    </span>
                </Row>
            )
        } else {
            return (
                <Row className="chat-line owner d-flex justify-content-end mx-0 mb-3">
                    <span
                        className="chat-line-text mt-3 px-3 py-2"
                        style={{
                            width: "fit-content",
                            maxWidth: "calc(100% - 73px - 26px - 80px)",
                            height: "fit-content",
                            color: "#FFFFFF",
                            fontSize: "14px",
                            backgroundColor: "#007BFF"
                        }}
                    >
                        {this.props.content}
                    </span>
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.6024 9.01131L0.0402996 8.38789L9.15088 26.1008L20.6024 9.01131Z" fill="#007BFF" />
                    </svg>
                    <Image className="avatar-chat-line" thumbnail roundedCircle src={this.props.avatar} />
                </Row>
            )
        }
    }
}


export default ChatLine;