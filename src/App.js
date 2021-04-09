import React from "react";
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
library.add(faHome, faCommentAlt, faUserFriends, faEnvelope, faBell, faCaretDown)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <>
          <Navbar>
            <Container fluid>
              <Col xs={3}>
                <Navbar.Brand className="py-0">
                  <Link className="nav-link py-0" to="/">
                    <Logo />
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
        </>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
