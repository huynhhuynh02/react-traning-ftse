import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../../../styles/navbar/NavbarButton.css";

export default class NavbarButton extends React.Component {
    render() {
        return (
            <Button 
                variant="light"
            >
                    <FontAwesomeIcon icon={this.props.icon} size={this.props.size} />
            </Button>
        );
    }
}