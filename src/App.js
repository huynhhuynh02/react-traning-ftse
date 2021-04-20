import React, { useState, useEffect } from "react";
// import components
import Logo from './components/common/Logo';
import NavbarButton from "./components/navbar/NavbarButton";
import FeatureButton from "./components/navbar/FeatureButton";
import MoreFeatureButton from "./components/navbar/MoreFeatureButton";
import './App.css';
// import Router DOM
import routes from './router/AppRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
  Col
} from 'react-bootstrap';
// import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faCommentAlt,
  faUserFriends,
  faEnvelope,
  faBell,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
// import and initialize Firebase
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqWIFJld9SsgRrXzKyhQmzovQcCQoiMkQ",
  authDomain: "nista-7d773.firebaseapp.com",
  databaseURL: "https://nista-7d773-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nista-7d773",
  storageBucket: "nista-7d773.appspot.com",
  messagingSenderId: "1026820559911",
  appId: "1:1026820559911:web:b57a235484a0ae6ef7aa02",
  measurementId: "G-7FSJ1550CQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Add FontAwesome icon ref to library
library.add(faHome, faCommentAlt, faUserFriends, faEnvelope, faBell, faCaretDown)

export default function App() {
  let [ navBar, hideNavBar ] = useState(true)
  const childMethod = (params) => {
    hideNavBar(params)
  }
  return (
    <Router>
      <Navbar style={{ display: (navBar ? "none" : "flex") }}>
        <Container fluid>
          <Col xs={3}>
            <Navbar.Brand className="py-0">
              <Link className="nav-link py-0" to="/">
                <Logo align="left" />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col xs={6}>
            <Nav className="header-tab justify-content-center">
              <NavLink exact activeClassName="selected" to="message">
                <NavbarButton
                  icon="comment-alt"
                  size="2x"
                />
              </NavLink>
              <NavLink exact activeClassName="selected" to="/">
                <NavbarButton
                  icon="home"
                  size="2x"
                />
              </NavLink>
              <NavLink exact activeClassName="selected" to="friend">
                <NavbarButton
                  icon="user-friends"
                  size="2x"
                />
              </NavLink>
            </Nav>
          </Col>
          <Col xs={3} className="pr-0">
            <Nav className="feature-tab justify-content-end">
              <FeatureButton icon="envelope" size="lg" />
              <FeatureButton icon="bell" size="lg" />
              <MoreFeatureButton icon="caret-down" size="2x" />
            </Nav>
          </Col>
        </Container>
      </Navbar>
      <Switch>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={routeProps => (
              // pass the sub-routes down to keep nesting
              <route.component {...routeProps} hideNavBar={childMethod} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}