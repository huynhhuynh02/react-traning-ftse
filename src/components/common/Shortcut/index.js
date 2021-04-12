import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

import "./../../../styles/common/Shortcut.css";
import shortcutList from "./../../../resources/database/shortcutData";
class Shortcut extends React.Component {
    render() {
        return (
            <Container className="shortcut px-3">
                <Row className="title mx-0 py-2">
                    <Col className="px-0 py-2"><h5>Lối tắt của bạn</h5></Col>
                </Row>
                <Row className="mx-0 py-1">
                    <Col className="shortcut-list px-0">
                        {shortcutList.map((shortcut, i) => {
                            return (
                                <Row className="shortcut-item mx-0 my-2 px-0" key={i}>
                                    <Button variant="light" className="d-flex justify-content-left w-100">
                                        <div className="pr-2">
                                            <Image src={shortcut.shortcutInfo.avatar} roundedCircle className="avatar-shortcut" />
                                        </div>
                                        <div className="px-2 py-1 d-flex flex-column justify-content-between">
                                            <div className="d-flex flex-column justify-content-between align-items-start py-1">
                                                <span className="username-shortcut font-weight-bold">{shortcut.shortcutInfo.name}</span>
                                                <span className="date-shortcut text-secondary">{shortcut.shortcutInfo.type}</span>
                                            </div>
                                            <span>{shortcut.content}</span>
                                        </div>
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


export default Shortcut;