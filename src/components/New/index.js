import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import routes from '../../router/AppRouter';
import mercedesE200 from '../../images/mercedesE200.jpg';
import Mercedese250 from '../../images/Mercedese250.jpg';
import DSCF2698 from '../../images/DSCF2698.jpg';
import FullSizeRender from '../../images/FullSizeRender.jpg';
import mercsc98 from '../../images/mercsc98.jpg';
import mercedesphumyhung from '../../images/mercedesphumyhung.jpg';
import MercedesE300 from '../../images/MercedesE300.jpg';
import mercedesF200 from '../../images/mercedesF200.jpg';
import mercedess450luxury from '../../images/mercedess450luxury.jpg';
import MERCEDESCLA200 from '../../images/MERCEDESCLA200.jpg';
import MERCEDESCLA250 from '../../images/MERCEDESCLA250.jpg';
import Information from '../Information';
import Item from '../Item';
import "../../styles/vinfast.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
    }
    handleLinkClick() {
        this.props.hide(true)
        this.setState({
            hide: true
        })
    }
    render() {
        return (
            <Router>
                <Container className={this.state.hide ? "d-none" : ""}>
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/information" onClick={this.handleLinkClick.bind(this)}>
                                <Item img={mercedesE200} content="MERCEDES C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={Mercedese250} content="MERCEDES C200 EXCLUSIVE" price="1.699.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={DSCF2698} content="MERCEDES C300 AMG" price="1.999.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={FullSizeRender} content="MERCEDES GLC200" price="1.799.000.000 vnđ" />
                            </Link>
                        </Col>
                    </Row>
                    {/* hang2 */}
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/infomartion">
                                <Item img={mercsc98} content="MERCEDES C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={mercedesphumyhung} content="MERCEDES C200 EXCLUSIVE" price="1.699.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={MercedesE300} content="MERCEDES C300 AMG" price="1.699.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={mercedesF200} content="MERCEDES GLC200" price="1.799.000.000 vnđ" />
                            </Link>
                        </Col>
                    </Row>
                    {/* hang3 */}
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/infomartion">
                                <Item img={mercedesF200} content="MERCEDES C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={mercedesF200} content="MERCEDES C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={mercedess450luxury} content="MERCEDES C200 EXCLUSIVE" price="1.699.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={MERCEDESCLA200} content="MERCEDES C300 AMG" price="1.999.000.000 vnđ" />
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Switch>
                    <Route path="/information">
                        <Information />
                    </Route>
                </Switch>
            </Router >
        )
    }
}
export default New;