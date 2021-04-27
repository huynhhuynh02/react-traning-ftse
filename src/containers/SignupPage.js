import React, { useEffect } from 'react';

import SignupForm from "../components/login/SignupForm";

export default function SignupPage(props) {
    useEffect(() => {if (props.navBarState) props.setNavBar(false)});
    return (
        <div
            className="page-signup"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%"
            }}
        >
            <div className="bg-blur"></div>
            <SignupForm />
        </div>
    );
}