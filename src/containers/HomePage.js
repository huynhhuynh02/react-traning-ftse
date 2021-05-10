import React from 'react';
import '../styles/homestyle.css'
import { Link, NavLink, Router } from 'react-router-dom';
import { Jumbotron, Button, Carousel, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ButtonMS from '../components/Button';
import albums from '../data'
import FormMS from '../components/formMS/FormMS'
import firstSL from '../data/img/firstsl.jpg'
import secondSL from '../data/img/secondsl.jpg'
import thirdSL from '../data/img/thirdsl.jpg'
import img from '../data/img/firstsl.jpg'
import fistplaytist from '../data/img/fistplaytist.jpg'
import secondplaytist from '../data/img/freedom.jpg'
import thirdplaytist from '../data/img/dancinwiththedevil.jpg'
import fourplaytist from '../data/img/position.jpg'
import fiveplaytist from '../data/img/chemtrail.jpg'

import { BsSearch, BsPerson, BsLayoutTextWindow, BsFillPlayFill } from 'react-icons/bs'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { AiOutlineYoutube, AiOutlineHeart } from 'react-icons/ai'
import { BiMusic, BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import PlayMS from '../components/PlayMusic/playmusic';
import GetId from '../components/PlayMusic/getId';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSong: 1
        };
        // this.play = this.play.bind(this)
        const audioRef = React.createRef();
    }


    
    render() {
        // alert(this.state.currentSong)
        const ListMusic = albums.map((element, i) => {

            if (i <= 3) {
                return (
                    <Col xs={3}>

                        <div onClick={this.props.source.bind(this, i, element.source, element.img, element.name, element.singer)} key={i} className="music-item">
                            <div className="wrap"></div>


                            <img src={element.img} />
                            <h5>{element.name}</h5>

                        </div>
                    </Col>

                )
            }
        })


        const ListSinger = albums.map((element, i) => {
            return (
                <div className="list">
                    <Col><div className="img-singer"><img src={firstSL} /></div><p>{element.singer}<span className="infor">asdf</span></p></Col>
                </div>
            )
        })
        const ListTop = albums.map((element, i) => {

            if (i <= 10) {
                return (
                    <div>

                        <Col>
                            <p onClick={this.props.source.bind(this, i, element.source, element.img, element.name)} className="topms-bar"><span>{i+1} .</span><span className="control"><BsFillPlayFill /></span>{element.name}<span className="view-ms">{element.time}</span></p>
                        </Col>

                    </div>
                )
            }

        }
        )
        const ParentList = albums.map((element, i) => {
            return (
                <>
                    {ListTop}
                </>
            )
        })
        return (
            <>

                <Container>


                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>

                                    <NavLink to="/getId" >
                                        <img onClick={this.props.albums.bind(this, 1)}
                                            className="d-block w-100"
                                            src={firstSL}
                                            alt="First slide"
                                        />
                                    </NavLink>
                                </Col>
                                <Col>
                                    <p className="playlist-title">Sơn Tùng</p>
                                    <p className="playlist-infor">23 al</p>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={firstSL}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>

                        </Carousel.Item>


                    </Carousel>

                    <div className="list-music">
                        <h2 className="suggestions">GỢI Ý CHO HÔM NAY</h2>

                        <Row>
                            {ListMusic}
                        </Row>
                    </div>


                    <div className="top-music">
                        <Row>
                            <Col xs={7}>
                                <h2 className="suggestions">TOP THỊNH HÀNH<AiOutlineHeart /></h2>
                                <label id="tag" for="read-more">Xem thêm</label>
                                <input className="check" type="checkbox" id="read-more" />
                                <div className="div-top">
                                    {ListTop}

                                </div>

                            </Col>
                            <Col xs={5}>
                                <h2 className="suggestions">NGHE TRONG TUẦN</h2>
                                <div className="singer-top">
                                    {ListSinger}
                                </div>
                            </Col>
                        </Row>





                    </div>

                    <div className="playtist">
                        <h2 className="suggestions">PLAYTIST</h2>
                        <Row>

                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={fistplaytist} alt="playtist" />

                                    </div>

                                    <div className="playtist-title">
                                        <p className="playtist-title-text">Fearless (Taylor's Version)</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={secondplaytist} alt="playtist" />

                                    </div>

                                    <div className="playtist-title">
                                        <p className="playtist-title-text">Freedom.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={thirdplaytist} alt="playtist" />

                                    </div>

                                    <div className="playtist-title">
                                        <p className="playtist-title-text">Dancing With The Devil...The Art of Starting Over (Deluxe Edition)</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={fourplaytist} alt="playtist" />

                                    </div>

                                    <div className="playtist-title">
                                        <p className="playtist-title-text">Position (Deluxe)</p>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={fiveplaytist} alt="playtist" />

                                    </div>

                                    <div className="playtist-title">
                                        <p className="playtist-title-text">Chemtrails Over The Country Club</p>
                                    </div>
                                </div>
                            </Col>


                        </Row>
                    </div>












                    {/* <audio
                    // ref={audioRef}
                    src={albums[this.state.currentSong].source}
                /> */}
                </Container>

            </>

        );
    }
}


export default HomePage;