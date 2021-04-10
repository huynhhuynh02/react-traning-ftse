import React from 'react';
import '../styles/homestyle.css'
import { Link } from 'react-router-dom';
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
import {BsSearch} from 'react-icons/fa'
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSong: 1
        };
        this.play = this.play.bind(this)
        const audioRef = React.createRef();
    }


    play(i) {
        alert(i)
        this.setState({
            currentSong: i,
        })
    }
    render() {
        const ListMusic = albums.map((element, i) => {

            if (i <= 3) {
                return (
                    <Col xs={3}>

                        <div key={i} onClick={this.play.bind(this, i)} className="music-item">
                            <div className="wrap"></div>


                            <img src={element.img} />
                            <h5>{element.name}</h5>

                        </div>
                    </Col>

                )
            }
        })
        const ListTop = albums.map((element, i) => {
            if (i <= 10) {
                return(
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={i+1}>
                            <p><span>{i+1}. </span>{element.name}<span className="view-ms">{element.viewer}.viewer </span></p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body>
                            <p><span>Singer: </span>{element.singer}</p>
                            <p>Thời lượng: {element.time}</p>
                            <Button variant="secondary">Play</Button>{' '}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                )
            }

        })
        return (
            <>

                <Container>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={firstSL}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={secondSL}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={thirdSL}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="suggestions">GỢI Ý CHO HÔM NAY</h2>
                    <div className="list-music">

                        <Row>
                            {ListMusic}
                        </Row>
                    </div>

                    <h2 className="suggestions">TOP THỊNH HÀNH</h2>
                    <div className="top-music">
                        <Accordion>
                            {ListTop}

                        </Accordion>

                    </div>
                    <h2 className="suggestions">PLAYTIST</h2>
                    <div className="playtist">
                        <Row>
                            
                            <Col>
                                <div className="playtist-item">
                                    <div className="wrap"></div>
                                    <div className="playtist-item-img">
                                        <img src={fistplaytist} alt="playtist"/>

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
                                        <img src={secondplaytist} alt="playtist"/>

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
                                        <img src={thirdplaytist} alt="playtist"/>

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
                                        <img src={fourplaytist} alt="playtist"/>

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
                                        <img src={fiveplaytist} alt="playtist"/>

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