import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';

import avatar from "./../../../resources/images/avatar.jpeg";
class className extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: [
                avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar
            ]
        }
    }

    render() {
        return (
            <Container className="library d-flex flex-wrap">
                {this.state.imgArr.map((img, i) => {
                    return (
                        <Col xs={4} className="img-item py-2" key={i}>
                            <Image src={img} thumbnail />
                        </Col>
                    )
                })}
            </Container>
        );
    }
}


export default className;