import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';

import avatarDemo from "./../../../resources/images/avatar.jpg";

let imgArr = [
    avatarDemo, avatarDemo, avatarDemo, avatarDemo, avatarDemo
]

export default function LibraryList() {
    return (
        <Container className="library d-flex flex-wrap justify-content-left align-items-center">
            {imgArr.map((img, i) => {
                return (
                    <Col xs={4} className="img-item text-center py-2" key={i}>
                        <Image src={img} thumbnail />
                    </Col>
                )
            })}
        </Container>
    );
}