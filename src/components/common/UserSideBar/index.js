import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/common/UserSideBar.css";
import userData from "./../../../resources/database/userData";
class UserSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            userData: userData
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    /* Set the width of the side navigation to 250px */
    openNav() {
        this.setState({ expanded: !this.state.expanded })
    }
    /* Set the width of the side navigation to 0 */
    closeNav() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        return (
            <div className="user-side-bar">
                <div
                    id="mySidenav"
                    className={this.state.expanded ? "sidenav expanded" : "sidenav"}>
                    <Button className="closebtn" onClick={this.closeNav}>&times;</Button>
                    <Button variant="light" className="page-preview d-flex align-items-center mb-4">
                        <div className="pr-2">
                            <Image src={this.state.userData.avatar} roundedCircle className="avatar-user" />
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-start py-1">
                            <span className="username-shortcut font-weight-bold">{this.state.userData.username}</span>
                            <span className="preview text-secondary">Preview your page</span>
                        </div>
                    </Button>
                    <div className="option-list d-flex flex-column">
                        <Button variant="light" className="text-left px-3 py-3 mb-2">
                            <FontAwesomeIcon icon={faUserCog} size="lg" className="mr-3" />
                            Profile Settings
                        </Button>
                        <Button variant="light" className="text-left px-3 py-3 mb-2">
                            <FontAwesomeIcon icon={faCog} size="lg" className="mr-3" />
                            Application Settings
                        </Button>
                        <Button variant="light" className="text-left px-3 py-3 mb-2">
                            <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="mr-3" />
                            Sign Out
                        </Button>
                    </div>
                </div>

                {/* Use any element to open the sidenav */}
                <Button
                    variant="success"
                    className="side-bar-trigger d-flex flex-column align-items-center px-2 py-2"
                    onClick={this.openNav}>
                    <Image src={this.state.userData.avatar} roundedCircle className="avatar-user mx-2" />
                    <div className="user-name">{this.state.userData.username}</div>
                </Button>

                {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
            </div>
        );
    }
}


export default UserSideBar;