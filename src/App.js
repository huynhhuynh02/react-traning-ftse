import logo from './logo.svg';
import './App.css';
import routes from './router/AppRouter';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { UserContext } from "./providers/UserProvider";
import UserProvider from "./providers/UserProvider";
function App() {
  return (
    <UserProvider>
    <Router>
      {/* <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#login">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/home">Home</Link>
        </Nav>
      </Navbar>
      </> */}
      
      <Switch>
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
         
    </Router>
    </UserProvider>
  );
}

export default App;
