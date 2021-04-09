import React from 'react';
import { Button } from "react-bootstrap";
import "./../../../styles/navbar/FeatureButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FeatureButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="feature-btn">
                <FontAwesomeIcon icon={this.props.icon} size={this.props.size} />
            </Button>
        );
    }
}


export default FeatureButton;