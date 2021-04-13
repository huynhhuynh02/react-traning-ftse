import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import TrangThanhtoan from './containers/TrangThanhtoan';
import TrangMuahang from './containers/TrangMuahang';
import routes from './router/AppRouter';
import Home1 from './components/Home1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function App() {
  return (
    <>
      <HomePage>
      </HomePage>

      <TrangMuahang>
      </TrangMuahang>
      
      <TrangThanhtoan>
      </TrangThanhtoan>
    </>
    // <Router>
    // <>
    //   /* <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="mr-auto">
    //       <Link className="nav-link" to="/">Home</Link>
    //       <Link className="nav-link" to="/about">About</Link>
    //       <Link className="nav-link" to="/contact">Contact</Link>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-info">Search</Button>
    //     </Form>
    //   </Navbar> */
    // </>
    /* <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              exact={route.exact}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
  </Router> */
  );
}

export default App;
