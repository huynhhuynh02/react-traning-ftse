import React from 'react';
import { Button } from "react-bootstrap";
import "./../../../styles/navbar/NavbarButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavbarButton extends React.Component {
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


export default NavbarButton;