import React from 'react';
import logo from "./../../../resources/images/logo.png";
import "./../../../styles/common/Logo.css";

class Logo extends React.Component {
    render() {
        return (
            <div className="app-logo d-flex align-items-center">
                <img src={logo} alt="logo" />
                <span>Nista</span>
            </div>
        );
    }
}


export default Logo;