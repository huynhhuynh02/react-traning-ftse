import React from 'react';
import '../style/Home.css';
import { Button, Form } from 'react-bootstrap';
import Artist from '../components/Artists';
import { AiFillHeart } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import mood from "../images/mood.jpg";
import justinbeiber from "../images/justinbeiber.jpg";
import sia from "../images/sia.jpg";
import marron5 from "../images/marron5.jpg";
import travisscott from "../images/travis-scott.jpg";
import monster from "../images/Monster.jpg";
import TopChartmini from '../components/Topchartmini';
import Playlist from '../components/Playlist';
import {Link} from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div className="Home-page pt-3 pl-4">
                <div className="Title">
                    <h3>Trending New Hits</h3>
                    <div className="Title-song">
                        <h1>Old Town Road</h1>
                        <h3>Lil Nas X, Billy Ray Cyrus</h3>
                        <p>63 Millions Plays</p>
                    </div>
                    <div className="Button-listen pt-2">
                        <Link to="/lyrics" class="btn btn-primary" id="btn1" variant="primary">Listen Now</Link>
                        <Button id="btn2" variant="secondary"><AiFillHeart></AiFillHeart></Button>
                    </div>
                </div>
                <div className="container-fluid pt-3 pr-5">
                    <div className="row pr-5">
                        <div className="col-8">
                            <div className="container-fluid" style={{ backgroundColor: '#202026', borderRadius: "20px" }}>
                                <div className="See-all">
                                    <h4>Top Artist</h4>
                                    <p>See all</p>
                                </div>
                                <div className="Artist">
                                    <div className="container-fluid">
                                        <div className="row" style={{ justifyContent: "space-between" }}>
                                            {/* {
                                                data.map((item)=>{
                                                    <Artist imgBG={item.img} title={item.title} countlisten={item.coutlisten}></Artist>
                                                })
                                            }
                                             */}
                                            <Artist imgBG={justinbeiber} title="Justin beiber" countlisten="44M Plays"></Artist>
                                            <Artist imgBG={justinbeiber} title="Justin beiber" countlisten="44M Plays"></Artist>
                                            <Artist imgBG={justinbeiber} title="Justin beiber" countlisten="44M Plays"></Artist>
                                            <Artist imgBG={justinbeiber} title="Justin beiber" countlisten="44M Plays"></Artist>
                                            <Artist imgBG={justinbeiber} title="Imagine Dragon" countlisten="44M Plays"></Artist>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid pt-4 pl-0">
                                <div className="row" style={{ justifyContent: "space-between" }}>
                                    <div className="col-5">
                                        <div className="Genres p-3" style={{ backgroundColor: '#202026', borderRadius: "20px", color: "white" }}>
                                            <div className="See-all">
                                                <h4>Genres</h4>
                                                <p>See all</p>
                                            </div>
                                            <div className="Category pl-3 pr-3 pt-1 pb-0">
                                                <div className="row" style={{ justifyContent: "space-between" }}>
                                                    <div className="col-6 Categories" style={{ backgroundColor: '#476A8A' }}>
                                                        Dance<br></br>Beat
                                                    </div>
                                                    <div className="col-5 Categories" style={{ backgroundColor: '#A69984' }}>
                                                        Electronic<br></br>Pop
                                                    </div>
                                                    <div className="col-7 Categories" style={{ backgroundColor: '#A24C34' }}>
                                                        Alternative Indie
                                                    </div>
                                                    <div className="col-4 Categories" style={{ backgroundColor: '#0D4045' }}>
                                                        Hip<br></br>Hop
                                                    </div>
                                                    <div className="col-4 mb-1 Categories" style={{ backgroundColor: '#A67894' }}>
                                                        Viet<br></br>Music
                                                    </div>
                                                    <div className="col-7 mb-1 Categories" style={{ backgroundColor: '#5547A5' }}>
                                                        Acoutic<br></br>Music
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7 p-0" style={{ backgroundColor: '#202026', borderRadius: "20px" }}>
                                        <div className="Top-chart p-3">
                                            <div className="See-all">
                                                <h4>Top Chart</h4>
                                                <p>See all</p>
                                            </div>
                                            <TopChartmini stt={'01'} imgBG={mood} Namesong={'Mood'} Nameartist={'24Goldn,Iann Dior'} Timing={'3:45'}></TopChartmini>
                                            <TopChartmini stt={'01'} imgBG={mood} Namesong={'Mood'} Nameartist={'24Goldn,Iann Dior'} Timing={'3:45'}></TopChartmini>
                                            <TopChartmini stt={'01'} imgBG={mood} Namesong={'Mood'} Nameartist={'24Goldn,Iann Dior'} Timing={'3:45'}></TopChartmini>
                                            <TopChartmini stt={'01'} imgBG={mood} Namesong={'Mood'} Nameartist={'24Goldn,Iann Dior'} Timing={'3:45'}></TopChartmini>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" style={{ backgroundColor: '#202026', borderRadius: '20px' }}>
                            <Playlist nameSong={'Monster'} NameArtist={'Shawn Mendes'} album={'Top Chart'} imgBG={monster}></Playlist>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;