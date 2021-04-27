import React, { useEffect } from 'react';

import LoginForm from "./../components/login/LoginForm";

export default function LoginPage(props) {
    useEffect(() => {if (props.navBarState) props.setNavBar(false)});
    return (
        <div
            className="page-login"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%"
            }}>
            <div className="bg-blur"></div>
            <LoginForm />
        </div>
    );
}