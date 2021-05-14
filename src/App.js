
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import Topchart from './containers/TopChart';
import Lyrics from './containers/Lyrics';
import Home from './containers/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/App.css';
import routes from "./AppRouter";
function App() {
  if (localStorage.getItem('historySong') == null ) {
      var list = [];
      localStorage.setItem('historySong',JSON.stringify(list));
  }
  return (
    <Router>
      <div className="container-page">
        <Sidebar />
        <main style={{ marginLeft: '15%', paddingTop: '86px', paddingLeft: '18px' }}>
          <Topbar />
          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => (<route.component {...props} />)}
              />
            ))}
          </Switch>

        </main>



      </div>
    </Router>
  );
}

export default App;
