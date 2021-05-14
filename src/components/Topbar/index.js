
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {GoBell} from 'react-icons/go';
import {RiSettings3Fill} from 'react-icons/ri';
import '../../style/Topbar.css';
import {Link} from "react-router-dom";
class Topbar extends React.Component {
    render() {
        return (
            <div className="Topbar">
                <Navbar variant="dark">
                    <Nav className="mr-auto title">
                        <Link  to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Nav.Link href="#features">Music</Nav.Link>
                        <Nav.Link href="#pricing">Live</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Type to search..." />
                    </Form>
                </Navbar>
                <div className="Sign-in">
                    <GoBell></GoBell>
                    <RiSettings3Fill></RiSettings3Fill>
                    <div className="Member">
                        <a href="#"><p>Sign In</p></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Topbar;