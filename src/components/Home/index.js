import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Carousel, Row, Button, ToggleButton, ToggleButtonGroup, TabContainer, Form, FormControl } from 'react-bootstrap';
import logobanner from '../../images/logobanner.png';
import { FaSearch, FaRegClock } from "react-icons/fa";
import New from '../New/index.js';
import Used from '../Used/index.js';

// retouer
import routes from '../../router/AppRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
    }
    render() {
        return (
            <>
                <Container>
                    <Nav style={{display: (this.state.hide ? "none" : "flex")}} defaultActiveKey="/home" as="ul">
                        <Link to="/new"><Button variant="secondary">New</Button>{' '}</Link>
                        <Link to="/used"><Button variant="secondary">Used</Button>{' '}</Link>
                    </Nav>
                    <Switch>
                        <Route path="/new">
                            <New hide={(v) => {
                                this.setState({
                                    hide: v
                                })
                            }} />
                        </Route>
                        <Route path="/used">
                            <Used hide={(v) => {
                                this.setState({
                                    hide: v
                                })
                            }} />
                        </Route>
                    </Switch>
                </Container>
            </>
        )
    }
}


export default Home;