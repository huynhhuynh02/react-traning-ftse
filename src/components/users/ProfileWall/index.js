import React from 'react';
import { Col, Container, Image, Row, Spinner, Dropdown, ButtonGroup } from 'react-bootstrap';
import {
    NavLink,
    Switch,
    Route
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faMars, faVenus, faCity, faGlobeEurope, faEdit, faUserEdit } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";

import "./../../../styles/users/ProfileWall.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";
import backgroundDemo from "./../../../resources/images/wall-bg.jpeg";

export default class ProfileWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: this.props.link,
            pathname: this.props.path,
            uid: (this.props.user === "owner" ? localStorage.getItem("uid") : this.props.user), // Get the uid from localStorage
            displayName: "",
            shareInfo: "",
            gender: "",
            city: "",
            country: "",
            postList: [],
            buddyList: [],
            libraryList: [],
            avatar: "",
            background: "",
            loading: true
        };
    }
    componentDidMount() {
        // Get Firebase firestore data
        const database = firebase.firestore();
        database.collection("users").where("uid", "==", this.state.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // Get Firebase storage data
                    console.log("Get user data: ", doc.exists);
                    const storage = firebase.storage().ref();
                    const avatarPath = "avatars/" + doc.data().avatar;
                    const backgroundPath = "backgrounds/" + doc.data().background;
                    if (doc.data().avatar !== undefined) {
                        // Add condition for avoid requested again when re-rendering
                        storage.child(avatarPath)
                            .getDownloadURL()
                            .then((url) => {
                                this.setState({ avatar: url });
                            })
                            .catch((error) => {
                                console.log("Error while getting file storage: ", error);
                                this.setState({ avatar: avatarDemo });
                            })
                    } else {
                        this.setState({ avatar: avatarDemo });
                    }
                    if (doc.data().background !== undefined) {
                        // Add condition for avoid requested again when re-rendering
                        storage.child(backgroundPath)
                            .getDownloadURL()
                            .then((url) => {
                                this.setState({ background: url });
                            })
                            .catch((error) => {
                                console.log("Error while getting file storage: ", error);
                                this.setState({ background: backgroundDemo });
                            })
                    } else {
                        this.setState({ background: backgroundDemo });
                    }
                    this.setState({
                        displayName: doc.data().displayName,
                        shareInfo: doc.data().shareInfo,
                        gender: doc.data().gender,
                        city: doc.data().city,
                        country: doc.data().country,
                        postList: doc.data().postList,
                        buddyList: doc.data().buddyList,
                        libraryList: doc.data().libraryList,
                        loading: false
                    })
                })
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    componentDidUpdate(prevProps) {
        if (this.props.link !== prevProps.link || this.props.path !== prevProps.path) {
            this.setState({
                link: this.props.link,
                path: this.props.path
            });
        }
        if (this.props.user !== prevProps.user && this.props.user !== null) {
            const database = firebase.firestore();
            database.collection("users").where("uid", "==", this.props.user).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        // Get Firebase storage data
                        console.log("Get user data: ", doc.exists);
                        const storage = firebase.storage().ref();
                        const avatarPath = "avatars/" + doc.data().avatar;
                        const backgroundPath = "backgrounds/" + doc.data().background;
                        if (doc.data().avatar !== undefined) {
                            // Add condition for avoid requested again when re-rendering
                            storage.child(avatarPath)
                                .getDownloadURL()
                                .then((url) => {
                                    this.setState({ avatar: url });
                                })
                                .catch((error) => {
                                    console.log("Error while getting file storage: ", error);
                                    this.setState({ avatar: avatarDemo });
                                })
                        } else {
                            this.setState({ avatar: avatarDemo });
                        }
                        if (doc.data().background !== undefined) {
                            // Add condition for avoid requested again when re-rendering
                            storage.child(backgroundPath)
                                .getDownloadURL()
                                .then((url) => {
                                    this.setState({ background: url });
                                })
                                .catch((error) => {
                                    console.log("Error while getting file storage: ", error);
                                    this.setState({ background: backgroundDemo });
                                })
                        } else {
                            this.setState({ background: backgroundDemo });
                        }
                        this.setState({
                            uid: this.props.user,
                            displayName: doc.data().displayName,
                            shareInfo: doc.data().shareInfo,
                            gender: doc.data().gender,
                            city: doc.data().city,
                            country: doc.data().country,
                            postList: doc.data().postList,
                            buddyList: doc.data().buddyList,
                            libraryList: doc.data().libraryList,
                            loading: false
                        })
                    })
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    }
    render() {
        return (
            <>
                <div className="profile-bg d-flex justify-content-center">
                    {this.state.loading ? <Spinner animation="border" variant="secondary" /> : <Image fluid src={this.state.background} />}
                </div>
                <div className="profile">
                    <Row className="d-flex justify-content-center mx-0">
                        <Image className="avatar-profile" thumbnail roundedCircle src={this.state.avatar} />
                    </Row>
                    <div className="profile-name py-2">{this.state.displayName}</div>
                    <Container fluid>
                        <Row className="addition-info d-flex justify-content-between mx-0 py-4">
                            <Col xs={5} className="share-info text-secondary py-2">
                                {this.state.shareInfo === "" ? "Không có thông tin muốn chia sẻ" : this.state.shareInfo}
                            </Col>
                            <Col xs={2} className="settings-friend-button text-center py-3">
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
                                        <FontAwesomeIcon icon={faCog} size="lg" className="mr-2" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="menu-items">
                                        <Dropdown.Item className="d-flex justify-content-start px-1">
                                            <Col xs={2} className="icon-button">
                                                <FontAwesomeIcon icon={faEdit} size="lg" />
                                            </Col>
                                            <Col xs={10} className="text-button">
                                                Sửa thông tin chia sẻ
                                            </Col>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex justify-content-start px-1">
                                            <Col xs={2} className="icon-button">
                                                <FontAwesomeIcon icon={faUserEdit} size="lg" />
                                            </Col>
                                            <Col xs={10} className="text-button">
                                                Sửa thông tin cá nhân
                                            </Col>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={5} className="sumary-info text-secondary py-2">
                                <Row className="gender py-1">
                                    <Col xs={2}>
                                        {this.state.gender === "male" ?
                                            <FontAwesomeIcon icon={faMars} size="lg" className="mr-3" /> :
                                            <FontAwesomeIcon icon={faVenus} size="lg" className="mr-3" />}
                                    </Col>
                                    <Col xs={10}>
                                        Giới tính
                                        {this.state.gender === "male" ?
                                            <strong className="value text-dark"> Nam</strong> :
                                            <strong className="value text-dark"> Nữ</strong>}
                                    </Col>
                                </Row>
                                <Row className="city py-1">
                                    <Col xs={2}>
                                        <FontAwesomeIcon icon={faCity} size="lg" className="mr-3" />
                                    </Col>
                                    {this.state.city === "" ? "Không có thông tin" : <Col xs={10}>
                                        Đang sống ở <strong className="value text-dark">{this.state.city}</strong>
                                    </Col>}
                                </Row>
                                <Row className="nationality py-1">
                                    <Col xs={2}>
                                        <FontAwesomeIcon icon={faGlobeEurope} size="lg" className="mr-3" />
                                    </Col>
                                    <Col xs={10}>
                                        Quốc tịch <strong className="value text-dark">{this.state.country}</strong>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="tab-button-list justify-content-between mx-0 mb-3 pb-2">
                            {this.props.tabs.map((tabButton, index) =>
                                <NavLink
                                    key={index}
                                    activeClassName="tab-selected"
                                    activeStyle={{
                                        color: "white",
                                        backgroundColor: "#127FFF",
                                        fontWeight: "bold",
                                        boxShadow: "0 2px 4px 0 grey"
                                    }}
                                    exact={tabButton.exact}
                                    to={this.state.link + (this.props.user === "owner" ? "" : ("/" + this.state.uid)) + tabButton.path}
                                    className="tab-button px-5 py-2">
                                    {tabButton.label}
                                </NavLink>
                            )}
                        </Row>
                        <Row className="tab-display mx-0 pb-2 flex-column">
                            <Switch>
                                {this.props.tabs.map((tabContent, index) =>
                                    <Route
                                        key={index}
                                        exact={tabContent.exact}
                                        path={this.state.pathname + (this.props.user === "owner" ? "" : ("/" + this.state.uid)) + tabContent.path}
                                    >
                                        {
                                            this.state.postList === "" || this.state.buddyList === "" || this.state.libraryList === "" ?
                                                <Spinner animation="border" variant="secondary" /> :
                                                <tabContent.component
                                                    postList={this.state.postList}
                                                    buddyList={this.state.buddyList}
                                                    libraryList={this.state.libraryList}
                                                />
                                        }
                                    </Route>
                                )}
                            </Switch>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}