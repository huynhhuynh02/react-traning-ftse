import React from 'react';
import { Image } from "react-bootstrap";

import "./../../../styles/messages/ChatLine.css";
class ChatLine extends React.Component {
    render() {
        if (this.props.sender === "friend") {
            return (
                <div className="chat-line friend d-flex justify-content-start mb-5">
                    <Image className="avatar-chat-line" src={this.props.avatar} />
                    <div className="chat-line-text">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25999 12.0113L25.8221 11.3879L16.7115 29.1008L5.25999 12.0113Z" fill={this.props.bubbleColor} />
                        </svg>
                        <span
                            className="text px-3 py-3"
                            style={{
                                color: this.props.textColor,
                                fontSize: this.props.fontSize,
                                backgroundColor: this.props.bubbleColor
                            }}
                        >{this.props.content}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="chat-line owner d-flex justify-content-start mb-5">
                    <div className="chat-line-text">
                        <span
                            className="text px-3 py-3"
                            style={{
                                color: this.props.textColor,
                                fontSize: this.props.fontSize,
                                backgroundColor: this.props.bubbleColor
                            }}
                        >{this.props.content}</span>
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6024 9.01131L0.0402996 8.38789L9.15088 26.1008L20.6024 9.01131Z" fill={this.props.bubbleColor} />
                        </svg>
                    </div>
                    <Image className="avatar-chat-line" src={this.props.avatar} />
                </div>
            )
        }
    }
}


export default ChatLine;