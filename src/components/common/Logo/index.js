import React from 'react';
import { Image } from "react-bootstrap";

import logo from "./../../../resources/images/logo.png";
import "./../../../styles/common/Logo.css";

class Logo extends React.Component {
    render() {
        return (
            <div className={"app-logo d-flex align-items-center justify-content-" + this.props.align}>
                <Image src={logo} alt="logo" thumbnail roundedCircle />
                <span className={"text-" + this.props.textVariant}>Nista</span>
            </div>
        );
    }
}


export default Logo;