import React from 'react';
import { Button, Image, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faCog, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { firebase } from "./../../../App";

import "./../../../styles/common/UserSideBar.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";

export default class UserSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            avatar: "",
            displayName: ""
        }

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.userSignOut = this.userSignOut.bind(this);
    }
    componentDidMount() {
        // Get the uid from localStorage
        const userId = localStorage.getItem("id");
        if (userId !== null) {
            // Get Firebase firestore data
            const database = firebase.firestore();
            database.collection("users").doc(userId).get()
                .then((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log("Get user data successfully for sideBar");
                    // Get Firebase storage data
                    const storage = firebase.storage().ref();
                    if (doc.data().avatar !== undefined) {
                        const avatarPath = "avatars/" + doc.data().avatar;
                        storage.child(avatarPath)
                            .getDownloadURL()
                            .then((url) => {
                                this.setState({
                                    avatar: url,
                                    displayName: doc.data().displayName
                                })
                            })
                            .catch((error) => {
                                console.log("Error while getting avatar: ", error);
                                this.setState({
                                    avatar: avatarDemo,
                                    displayName: doc.data().displayName
                                })
                            });
                    } else {
                        this.setState({
                            avatar: avatarDemo,
                            displayName: doc.data().displayName
                        })
                    }
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    }
    /* Set the width of the side navigation to 250px */
    openNav() {
        clearTimeout(this.closeNavWaiter);
        this.setState({ expanded: !this.state.expanded })
        this.closeNavWaiter = setTimeout(() => {
            this.closeNav();
        }, 5000);
    }
    /* Set the width of the side navigation to 0 */
    closeNav() {
        clearTimeout(this.closeNavWaiter);
        this.setState({ expanded: !this.state.expanded })
    }
    userSignOut() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            localStorage.clear();
            console.log("currentUser", firebase.auth().currentUser);
        }).catch((error) => {
            // An error happened.
            console.log("signOutErr", error);
        })
    }
    render() {
        return (
            <div className="user-side-bar">
                <div
                    id="mySidenav"
                    className={(this.state.expanded ? "sidenav expanded" : "sidenav") + " pb-3"}>
                    <Button className="closebtn" onClick={this.closeNav}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                    <Link to="/profile" className="profile-preview px-3">
                        <Button variant="light" className="page-preview d-flex align-items-center mb-4 w-100">
                            <div className="pr-2">
                                {this.state.avatar === "" ? <Spinner animation="border" variant="secondary" /> : <Image src={this.state.avatar} thumbnail roundedCircle className="avatar-user" />}
                            </div>
                            <div className="d-flex flex-column justify-content-between align-items-start py-1">
                                <span className="username-shortcut font-weight-bold">
                                    {this.state.displayName.length > 12 ? (this.state.displayName.substring(0, 11) + "...") : this.state.displayName}
                                </span>
                                <span className="preview text-secondary">Xem trước trang cá nhân</span>
                            </div>
                        </Button>
                    </Link>
                    <div className="option-list d-flex flex-column">
                        <Link className="profile-settings-button px-3">
                            <Button variant="light" className="text-left py-3 mt-2 w-100">
                                <FontAwesomeIcon icon={faUserCog} size="lg" className="mr-3" />
                                Cài đặt tài khoản
                            </Button>
                        </Link>
                        <Link className="app-settings-button px-3">
                            <Button variant="light" className="text-left py-3 mt-2 w-100">
                                <FontAwesomeIcon icon={faCog} size="lg" className="mr-3" />
                                Cài đặt ứng dụng
                            </Button>
                        </Link>
                        <Link className="signout-button px-3" to={{ pathname: "/login", state: { logout: true } }}>
                            <Button
                                variant="light"
                                className="text-left py-3 mt-2 w-100"
                                onClick={this.userSignOut}>
                                <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="mr-3" />
                                Đăng xuất
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Use any element to open the sidenav */}
                <Button
                    variant="success"
                    className="side-bar-trigger d-flex flex-column align-items-center px-2 py-2"
                    onClick={this.openNav}>
                    {this.state.avatar === "" ? <Spinner animation="border" variant="secondary" /> : <Image src={this.state.avatar} roundedCircle thumbnail className="avatar-user mx-2" />}
                    <div className="user-name">
                        {this.state.displayName.length > 12 ? (this.state.displayName.substring(0, 11) + "...") : this.state.displayName}
                    </div>
                </Button>

                {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
            </div >
        );
    }
}