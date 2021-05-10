import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

import "./../../../styles/friends/FriendControl.css";
import SearchBar from "./../../common/SearchBar";
export default class FriendControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelect: this.props.tabSelected !== undefined ? this.props.tabSelected : 0
        }
    }
    selectTab(index) {
        this.setState({
            tabSelect: index
        })
    }
    render() {
        return (
            <Container fluid className="friend-control pt-4">
                <SearchBar targetsearch="danh sách bạn bè" />
                <Row className="tab-button-list justify-content-between mx-0 mb-3 pb-2">
                    {this.props.tabs.map((tabButton, index) =>
                        <Button
                            key={index}
                            variant={this.state.tabSelect === index ? "primary" : "link"}
                            onClick={this.selectTab.bind(this, index)}
                            className="tab-button px-5 py-2">
                            {tabButton.label}
                        </Button>
                    )}
                </Row>
                <Row className="tab-display mx-0 pb-2">
                    {this.props.tabs[this.state.tabSelect].component}
                </Row>
            </Container>
        );
    }
}