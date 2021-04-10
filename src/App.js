import logo from './logo.svg';
import './App.css';
import routes from './router/AppRouter';

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
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs'

function App() {
  return (
    
    <Router>

      <>
      <div className="search">
        <input className="ipt" type="text" placeholder="Tìm tên ca sĩ, tên bài hát"/>
        <div className="ipt-search"><BsSearch /></div>
      </div>
        <div className="menu-char"> 
              <Link className="nav-link" to="/">Trang chủ</Link>
              <Link className="nav-link" to="/about">Cá Nhân</Link>
              <Link className="nav-link" to="/contact">Zing char</Link>
              <Link className="nav-link" to="/contact">Theo dõi</Link>
              <Link className="nav-link" to="/contact">Nhạc Mới</Link>
              <Link className="nav-link" to="/contact">Thể loại</Link>
              <Link className="nav-link" to="/contact">MV</Link>
              
        </div>
        {/* <div className="play-music">
        
      </div> */}
      </>
      <div className="div-component">
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
      </div>
      
      <div>
        ádfsd
      </div>
    </Router>
    

  );
}

export default App;
