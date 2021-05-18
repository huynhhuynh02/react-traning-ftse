import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../../../styles/navbar/FeatureButton.css";

export default class FeatureButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="feature-btn" {...this.props}>
                <FontAwesomeIcon icon={this.props.icon} size={this.props.size} />
            </Button>
        );
    }
}