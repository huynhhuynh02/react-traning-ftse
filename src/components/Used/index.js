import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import routes from '../../router/AppRouter';
import mercedesE200 from '../../images/mercedesE200.jpg';
import A200 from '../../images/A200.jpg';
import DSCF2698 from '../../images/DSCF2698.jpg';
import FullSizeRender from '../../images/FullSizeRender.jpg';
import cuchinhhang from '../../images/cuchinhhang.jpg';
import mercedesphumyhung from '../../images/mercedesphumyhung.jpg';
import MercedesE300 from '../../images/MercedesE300.jpg';
import mercedesF200 from '../../images/mercedesF200.jpg';
import mercedess450luxury from '../../images/mercedess450luxury.jpg';
import MERCEDESCLA200 from '../../images/MERCEDESCLA200.jpg';
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
    }
    render() {
        return (
            <Router>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/information">
                                <Item img={mercedesE200} content="MERCEDES Cũ C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}><Item img={A200} content="MERCEDES Cũ C200 EXCLUSIVE" price="1.699.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={DSCF2698} content="MERCEDES C300 Cũ AMG" price="1.999.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={FullSizeRender} content="MERCEDES Cũ GLC200" price="1.799.000.000 vnđ" /></Col>
                    </Row>
                    {/* hang2 */}
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/infomartion">
                                <Item img={cuchinhhang} content="MERCEDES Cũ C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}><Item img={mercedesphumyhung} content="MERCEDES Cũ C200 EXCLUSIVE" price="1.699.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={MercedesE300} content="MERCEDES Cũ C300 AMG" price="1.699.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={mercedesF200} content="MERCEDES Cũ GLC200" price="1.799.000.000 vnđ" /></Col>
                    </Row>
                    {/* hang3 */}
                    <Row>
                        <Col xs={3}>
                            <Link className="newlink" to="/infomartion">
                                <Item img={mercedesF200} content="MERCEDES Cũ C180 AMG" price="1.499.000.000 vnđ" />
                            </Link>
                        </Col>
                        <Col xs={3}><Item img={mercedesF200} content="MERCEDES Cũ C180 AMG" price="1.499.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={mercedess450luxury} content="MERCEDES Cũ C200 EXCLUSIVE" price="1.699.000.000 vnđ" /></Col>
                        <Col xs={3}><Item img={MERCEDESCLA200} content="MERCEDES Cũ C300 AMG" price="1.999.000.000 vnđ" /></Col>
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