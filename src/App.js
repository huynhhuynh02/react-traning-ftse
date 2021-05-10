import logo from './logo.svg';
import './App.css';
import routes from './router/AppRouter';
import Home from './components/Home';
import logobanner from './images/logobanner.png';
import { FaSearch, FaRegClock } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container,
} from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="navbarcontent">
              <Navbar.Brand to="#home">8:00 AM - 19:00 PM </Navbar.Brand>
              <NavLink to="/">Trang Chủ</NavLink>
              <NavLink to="#features"> SHOWROOM</NavLink>
              <NavLink to="#pricing"> XE ĐÃ QUA SỬ DỤNG</NavLink>
              <NavLink to="#pricing"> DỊCH VỤ & HẬU MÃI</NavLink>
              <NavLink to="#pricing"> BẢNG GIÁ MỚI NHẤT </NavLink>
              <NavLink to="#pricing"> ĐẠI LÝ CHÍNH HÃNG BENZ</NavLink>
              <NavLink to="#pricing"> LIÊN HỆ</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <div className="logobanner">
          <img src={logobanner} />
        </div>
        {/* navbar2 */}
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="navbarcontentblack">
                <NavDropdown title="Tất Cả" id="basic-nav-dropdown">
                  <NavDropdown.Item to="#action/3.1">Xe đã qua sử dụng</NavDropdown.Item>
                </NavDropdown>
                <div className="navlinka">
                  <NavLink to="#home">A</NavLink>
                  <NavLink to="#link">C</NavLink>
                  <NavLink to="#link">E</NavLink>
                  <NavLink to="#link">S</NavLink>
                  <NavLink to="#link">CLA</NavLink>
                  <NavLink to="#link">CLS</NavLink>
                  <NavLink to="#link">GLC</NavLink>
                  <NavLink to="#link">GLA</NavLink>
                  <NavLink to="#link">GLS</NavLink>
                  <NavLink to="#link">SL</NavLink>
                  <NavLink to="#link">SLK</NavLink>
                  <NavLink to="#link">AMG</NavLink>
                </div>
              </Nav>
              <NavLink to=""><a style={{ textDecoration: "none", color: "black", }} to="" target="_blank"><FaRegClock /></a></NavLink>
              <NavLink to=""><a style={{ textDecoration: "none", color: "black", }} to="" target="_blank"><FaSearch /></a></NavLink>
            </Container>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
{/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}

{/* <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="#home"></Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/purchase">Purchase</Link>
              <Link className="nav-link" to="/pay">Pay</Link>
            </Nav>
          </Navbar> */}
