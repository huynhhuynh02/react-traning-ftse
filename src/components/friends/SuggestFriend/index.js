import React from 'react';
import { Row, Button, Col, Image, Container } from 'react-bootstrap';

import "./../../../styles/friends/SuggestFriend.css";
import suggestFriendList from "./../../../resources/database/suggestFriendData";
class SuggestFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestFriendList: suggestFriendList
        }
    }

    render() {
        return (
            <Container className="suggest-friend mt-2 pb-0">
                <h5 className="py-1">Có thể bạn quen biết</h5>
                {suggestFriendList.map((sfdata, i) => {
                    return (
                        <Button 
                            className="sf-item d-flex align-items-center mx-0 mb-2 px-2 py-2 rounded" 
                            variant="light"
                            key={i}>
                            <Col xs={4} className="pl-0">
                                <Image src={sfdata.avatar} roundedCircle className="avatar-suggest ml-2" />
                            </Col>
                            <Col xs={8} className="sf-info d-flex flex-column justify-content-between align-items-start py-1">
                                <span className="user-name ml-0">{sfdata.username}</span>
                                <span className="user-info ml-0">{sfdata.info}</span>
                                <span className="mutual-info ml-0">{sfdata.mutualFriend} mutual friends</span>
                            </Col>
                        </Button>
                    )
                })}
                <Row className="mx-0">
                    <Col className="d-flex justify-content-end px-0">
                        <Button variant="link" className="more-suggest text-danger pr-0">Xem thêm ...</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default SuggestFriend;