import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../../../styles/navbar/MoreFeatureButton.css";

export default class MoreFeatureButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="more-feature-btn" {...this.props}>
                <FontAwesomeIcon icon={this.props.icon} size={this.props.size} />
            </Button>
        );
    }
}