import React from 'react';
import { Container } from 'react-bootstrap';

import UserSideBar from "./../components/common/UserSideBar";
import Contact from "./../components/messages/Contact";
import SearchBar from "./../components/common/SearchBar";
import ChatBox from "./../components/messages/ChatBox";
import MessageList from "./../components/messages/MessageList";

import messageList from "./../resources/database/messageData";
class MessagePage extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            messageSelected: ""
        }
        this.selectMessage = this.selectMessage.bind(this)
    }
    selectMessage(message) {
        this.setState({
            messageSelected: message
        })
    }
    render(){
        return(
            <>
                <UserSideBar />
                <Container fluid className="page d-flex fixed">
                    <div className="left-box">
                        <MessageList data={messageList} select={this.selectMessage} />
                    </div>
                    <div className="main-box d-flex flex-column justify-content-center py-4">
                        {this.state.messageSelected !== "" ? <SearchBar targetsearch={"tin nhắn với " + this.state.messageSelected.member[0].username} /> : <></>}
                        <ChatBox data={this.state.messageSelected} />
                    </div>
                    <div className="right-box">
                        <Contact height="586px" listheight="520px" mt="1" />
                    </div>
                </Container>
            </>
        );
    }
}


export default MessagePage;