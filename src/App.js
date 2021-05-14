import logo from './logo.svg';
import './App.css';
import routes from './router/AppRouter';
import background from './data/img/Cosmic_Shear_2880x1620_Lede.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
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
import { BsSearch, BsPerson, BsLayoutTextWindow } from 'react-icons/bs'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import PlayMS from './components/PlayMusic/playmusic';
import React from 'react';
import albums from './data'
import playlist from './album'
import Logo from "../src/styles/headphones.svg"
import "../src/styles/Brand.css"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ntn: 1,
      currentSong: 1
    }
    this.boom = this.boom.bind(this)
    this.getValue = this.getValue.bind(this)
    this.getValuePlayList = this.getValuePlayList.bind(this)
    this.getItemPlaylist = this.getItemPlaylist.bind(this)
  }

  loadPlayList = (n) =>
    this.setState({
      currentPlayList: playlist[n],
      indexAlbum: n

    })
  getItemPlaylist(x, list, img) {
    // console.log(list)

    let arr = [];
    for (let i = 0; i < list.length; i++) {
      if (i != x ) {
        let dt = {
          position: list[i].position,
          songName: list[i].songName,
          songUrl: list[i].songUrl
        }
        arr.push(dt)
      }else{
        let dt = {
          position: 0,
          songName: list[i].songName,
          songUrl: list[i].songUrl
        }
        arr.splice(0,0,dt)
      }
    }
    console.log(arr)
    this.setState({
      currentPlayList:
      {
        playlistCoverUrl: img,
        songs: arr
      }

    })
  }


  boom(i) {

    this.setState({
      currentSong: i
    })
    alert(i)

  }

  getValue(x, y, img, name) {


    let arr = []
    let obj = {
      position: 1,
      songName: name,
      songUrl: y,
    }
    arr.push(obj)


    for (let i = 0; i < albums.length; i++) {
      if (i == x) {

      } else {
        obj = {
          position: i,
          songName: albums[i].name,
          songUrl: albums[i].source,
          img: albums[i].img
        }
        arr.push(obj)
      }

    }
    this.setState({

      currentPlayList: {
        playlistCoverUrl: img,
        songs: arr,
        type: 'album'
      }
    })

  }

  getValuePlayList(x) {
    this.loadPlayList(x)
  }
  render() {

    return (

      <Router>

        <>
          <div className="search">
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        Mu
                        <img src={Logo} width={"24px"} alt=""/>
                        sic
                    </h1>
                </Link>
            </div>
            <input className="ipt" type="text" placeholder="Tìm tên ca sĩ, tên bài hát" />
            <div className="ipt-search"><BsSearch /></div>
          </div>
          <div className="menu-char">


            <NavLink exact className="nav-link" activeClassName="checked" to="/">
              <RiCompassDiscoverLine /><p>Trang chủ</p>

            </NavLink>
            <NavLink className="nav-link" activeClassName="checked" to="/about">
              <BsPerson /><p>Đã Nghe</p>

            </NavLink>


            <NavLink className="nav-link" activeClassName="checked" to="/contact">
              <BsLayoutTextWindow /><p>Albums</p>

            </NavLink>





          </div>
          <div className="play-music">
            <PlayMS link={this.state.currentPlayList} />
            {/* <img className={'song-info__cover'} src={data.currentPlayList.playlistCoverUrl} alt="cover" /> */}
            {/* <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/> */}

            {/* <Atn clickthod={this.boom}/> */}

          </div>
        </>
        <div className="div-component">
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} source={this.getValue} albums={this.getValuePlayList} getItemPlaylist={this.getItemPlaylist} getAlbums={this.state.currentPlayList} />
                )}
              />
            ))}
          </Switch>
        </div>
        <div className="background-app">
          <div className="wrap-app"></div>
          <img src={background} />
        </div>

      </Router>


    );
  }
}

export default App;
