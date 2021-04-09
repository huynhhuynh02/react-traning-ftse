import React from 'react';
import { Button } from "react-bootstrap";
import "./../../../styles/navbar/MoreFeatureButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MoreFeatureButton extends React.Component {
    render() {
        return (
            <Button variant="light" className="more-feature-btn">
                <FontAwesomeIcon icon={this.props.icon} size={this.props.size} />
            </Button>
        );
    }
}


export default MoreFeatureButton;