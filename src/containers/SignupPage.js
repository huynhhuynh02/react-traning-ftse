import React from 'react';

import SignupForm from "../components/login/SignupForm";
class SignupPage extends React.Component {
    render() {
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
}


export default SignupPage;