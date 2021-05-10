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
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CauHenCauThe from './data/CauHenCauThe-DinhDung-6994741.mp3';
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
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiMusic } from 'react-icons/bi'
import PlayMS from './components/PlayMusic/playmusic';
import React from 'react';
import HomePage from './containers/HomePage';
import albums from './data'
import Atn from './data/clickmethod';
import AudioPlayer from 'react-playlist-player'
import ReactAudioPlayer from 'react-audio-player';
import playlist from './album'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valSearch: '',

      currentPlayList: {
        songs: [
          {
            img: ''
          }
        ],
        type: ''
      }
    }
    


    this.getValue = this.getValue.bind(this)
    this.getValuePlayList = this.getValuePlayList.bind(this)
    this.onChangeValSearch = this.onChangeValSearch.bind(this)
    this.getOnclickPlayList =this.getOnclickPlayList.bind(this)
  }
  
  loadPlayList = (n) =>
    this.setState({
      // imgSong: playlist[n].imgSong,
      currentPlayList: playlist[n],
      address: n,

    })
    
  getOnclickPlayList(x, array, img){
    let arr = [];

    for(let i = 0; i < array.length; i++ ){
      
      if( i == x){
        let obj = {
          position: array[i].position,
          songName: array[i].songName,
          songUrl: array[i].songUrl
         }
        arr.splice(0,0,obj)
      }else{
        let obj = {
          position: array[i].position,
          songName: array [i].songName,
          songUrl: array[i].songUrl
        }
        arr.push(obj)
      }

    }
    
    console.log(arr)
    
    this.setState({
      
      currentPlayList: {
        imgSong: img.imgSong,
        songs: arr
      }
    })
    
    

  }
  onChangeValSearch(event) {
    // console.log(event.target.value)
    let val = event.target.value;
    this.setState({
      valSearch: val,
    })

  }
  
  getValue(x, y, img, name, singer) {
    let a = document.getElementsByClassName('ipt-search').text
    alert(a)
    // alert(playlist[0].playlistName)
    let arr = []
    let obj = {
      img: img,
      position: 1,
      songName: name,
      songUrl: y,
    }
    


    
        obj = {
          position: x,
          songName: albums[x].name,
          songUrl: albums[x].source,
          img: img,
        }
        arr.push(obj)
      

    
    this.setState({
      bandName: singer,
      imgSong: img,
      currentPlayList: {
        songs: arr,
        
        type: 'album'
      },
    


    })
    
  }
  getItem(x, eName, eUrl, eSinger){

    
    this.getValue(x, eUrl, 'img', eName, eSinger)
    
  }
  xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }
  getValuePlayList(x) {
    this.loadPlayList(x)
  }
  render() {
    // console.log(this.state.currentPlayList.songs.art)
    const test = this.state.currentPlayList.songs.map((element)=> {
      return(<>{element.songName}</>)
    })
    const timkiem = albums.map((element, i) => {
      if(this.state.valSearch == ''){
        return('')
      }else{
      if ( this.xoa_dau(element.name.toLocaleLowerCase()).indexOf(this.xoa_dau(this.state.valSearch.toLocaleLowerCase())) != -1) {
        // console.log(this.xoa_dau(element.name.toLocaleLowerCase()).indexOf(this.xoa_dau(this.state.valSearch.toLocaleLowerCase())))
        return (
          <>
            <li onClick={this.getValue.bind(this, i, element.source, element.img, element.name)}>{element.name}</li>
          </>
        )
      }else{
        return('')
      }
    }
    })
    // console.log(timkiem)
    return (

      <Router>

        <>
          <div className="search">


            <input className="ipt" value={this.state.onChangeValSearch} onChange={this.onChangeValSearch} type="text" placeholder="Tìm tên ca sĩ, tên bài hát" />
            <div className="ipt-search"><p>Tìm kiếm</p></div>
            <ul>
              {timkiem}
            </ul>
          </div>
          <div className="menu-char">


            <NavLink exact className="nav-link" activeClassName="checked" to="/">
              <RiCompassDiscoverLine /><p>Trang chủ</p>

            </NavLink>
            <NavLink className="nav-link" activeClassName="checked" to="/about">
              <BsPerson /><p>Cá nhân</p>

            </NavLink>
            <NavLink className="nav-link" activeClassName="checked" to="/contact">
              <AiOutlineYoutube /><p>Zingchar</p>

            </NavLink>

          </div>
          <div className="play-music">
            {test}
            <PlayMS link={this.state.currentPlayList} img={this.state.imgSong} />
          </div>


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
                  <route.component {...props} routes={route.routes} itemplaylist={this.getItem} source={this.getValue} address={this.state.currentPlayList} getPlaylist={this.getOnclickPlayList} albums={this.getValuePlayList} />  
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
