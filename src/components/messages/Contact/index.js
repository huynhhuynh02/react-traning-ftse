import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import "./../../../styles/messages/Contact.css";
import friendList from "./../../../resources/database/friendData";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: friendList
        }
    }

    render() {
        return (
            <Container className="contact mt-1" style={{height: this.props.height}}>
                <Row className="title mx-0 pt-2">
                    <Col className="px-0 pt-2"><h5>Liên hệ của bạn</h5></Col>
                </Row>
                <Row className="mx-0 py-1">
                    <Col className="contact-list px-0" style={{height: this.props.listheight}}>
                        {this.state.contactList.map((contact, i) => {
                            return (
                                <Row className="contact-item mx-0 my-2 px-0" key={i}>
                                    <Button variant="light" className="d-flex justify-content-between align-items-center w-100">
                                        <div className="pr-2">
                                            <Image src={contact.avatar} roundedCircle className="avatar-contact" />
                                            <span className="username-contact font-weight-bold ml-2">{contact.username}</span>
                                        </div>
                                        <span className={contact.isOnline ? "status-contact online" : "status-contact"}></span>
                                    </Button>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Contact;