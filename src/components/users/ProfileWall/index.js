import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Spinner, Dropdown, ButtonGroup } from 'react-bootstrap';
import {
    NavLink,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faMars, faVenus, faCity, faGlobeEurope, faEdit, faUserEdit } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";

import "./../../../styles/users/ProfileWall.css";
import avatarDemo from "./../../../resources/images/avatar.jpg";
import backgroundDemo from "./../../../resources/images/wall-bg.jpeg";
export default function ProfileWall(props) {
    let match = useRouteMatch();
    const [avatar, setAvatar] = useState("");
    const [background, setBackground] = useState("");
    const [displayName, setDisplayName] = useState("")
    const [shareInfo, setShareInfo] = useState("");
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postList, setPostList] = useState("");
    const [buddyList, setBuddyList] = useState("");
    const [libraryList, setLibraryList] = useState("");
    // Get the uid from localStorage
    const uid = localStorage.getItem("uid");
    // Get Firebase firestore data
    const database = firebase.firestore();
    const getData = () => {
        database.collection("users")
            .where("uid", "==", uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // Get Firebase storage data
                    // console.log(doc.id, " => ", doc.data());
                    setDisplayName(doc.data().displayName);
                    setShareInfo(doc.data().shareInfo);
                    setGender(doc.data().gender);
                    setCity(doc.data().city);
                    setCountry(doc.data().country);
                    setPostList(doc.data().postList);
                    setBuddyList(doc.data().friendList);
                    setLibraryList(doc.data().libraryList);
                    const storage = firebase.storage().ref();
                    const avatarPath = "avatars/" + doc.data().avatar;
                    const backgroundPath = "backgrounds/" + doc.data().background;
                    // Add condition for avoid requested again when re-rendering
                    avatar === "" ? storage.child(avatarPath)
                        .getDownloadURL()
                        .then((url) => {
                            setAvatar(url);
                        })
                        .catch((error) => {
                            console.log(error.code, error.message);
                            setAvatar(avatarDemo);
                        }) : setAvatar(avatarDemo);
                    background === "" ? storage.child(backgroundPath)
                        .getDownloadURL()
                        .then((url) => {
                            setBackground(url);
                        })
                        .catch((error) => {
                            console.log(error.code, error.message);
                            setBackground(backgroundDemo);
                        }) : setBackground(backgroundDemo);
                })
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    useEffect(() => getData());
    return (
        <>
            <div className="profile-bg d-flex justify-content-center">
                {avatar === "" ? <Spinner animation="border" variant="secondary" /> : <Image fluid src={background} />}
            </div>
            <div className="profile">
                <Row className="d-flex justify-content-center mx-0">
                    <Image className="avatar-profile" thumbnail roundedCircle src={avatar} />
                </Row>
                <div className="profile-name py-2">{displayName}</div>
                <Container fluid>
                    <Row className="addition-info d-flex justify-content-between mx-0 py-4">
                        <Col xs={5} className="share-info text-secondary py-2">
                            {shareInfo === "" ? "Không có thông tin muốn chia sẻ" : shareInfo}
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
                                    {gender === "male" ? <FontAwesomeIcon icon={faMars} size="lg" className="mr-3" /> : <FontAwesomeIcon icon={faVenus} size="lg" className="mr-3" />}
                                </Col>
                                <Col xs={10}>
                                    Giới tính
                                    {gender === "male" ? <strong className="value text-dark"> Nam</strong> : <strong className="value text-dark"> Nữ</strong>}
                                </Col>
                            </Row>
                            <Row className="city py-1">
                                <Col xs={2}>
                                    <FontAwesomeIcon icon={faCity} size="lg" className="mr-3" />
                                </Col>
                                {city === "" ? "Không có thông tin" : <Col xs={10}>
                                    Đang sống ở <strong className="value text-dark">{city}</strong>
                                </Col>}
                            </Row>
                            <Row className="nationality py-1">
                                <Col xs={2}>
                                    <FontAwesomeIcon icon={faGlobeEurope} size="lg" className="mr-3" />
                                </Col>
                                <Col xs={10}>
                                    Quốc tịch <strong className="value text-dark">{country}</strong>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="tab-button-list justify-content-between mx-0 mb-3 pb-2">
                        {props.tabs.map((tabButton, index) =>
                            <NavLink
                                key={index}
                                activeClassName="tab-selected"
                                activeStyle={{
                                    color: "white",
                                    backgroundColor: "#127FFF",
                                    fontWeight: "bold",
                                    boxShadow: "0 2px 4px 0 grey"
                                }}
                                to={tabButton.path}
                                className="tab-button px-5 py-2">
                                {tabButton.label}
                            </NavLink>
                        )}
                    </Row>
                    <Row className="tab-display mx-0 pb-2 flex-column">
                        <Route
                            exact
                            path={match.url}
                        >
                            <Redirect to={props.tabs[0].path} />
                        </Route>
                        <Switch>
                            {props.tabs.map((tabContent, index) =>
                                <Route
                                    key={index}
                                    exact={tabContent.exact}
                                    path={tabContent.path}
                                >
                                    {
                                        postList === "" || buddyList === "" || libraryList === "" ?
                                        <Spinner animation="border" variant="secondary" /> :
                                        <tabContent.component
                                            postList={postList}
                                            buddyList={buddyList}
                                            libraryList={libraryList}
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