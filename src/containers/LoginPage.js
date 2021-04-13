import React from 'react';

import LoginForm from "./../components/login/LoginForm";
class LoginPage extends React.Component {
    render() {
        return (
            <div
                className="page-login"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%"
                }}
            >
                <div className="bg-blur"></div>
                <LoginForm />
            </div>
        );
    }
}


export default LoginPage;