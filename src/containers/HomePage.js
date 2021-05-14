import React from 'react';
import '../styles/homestyle.css'
import { Container, Row, Col } from 'react-bootstrap';
import albums from '../data'
import albumsV from '../dataViet'
import albumsK from '../dataPop'
import firstSL from '../data/img/firstsl.jpg'
import { BsFillPlayFill } from 'react-icons/bs'

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

                        <div onClick={this.props.source.bind(this, i, element.source, element.img, element.name)} key={i} className="music-item">
                            <div className="wrap"></div>


                            <img src={element.img} />
                            <h5>{element.name}</h5>

                        </div>
                    </Col>

                )
            }
        })

        const ListMusicV = albumsV.map((element, i) => {

            if (i <= 3) {
                return (
                    <Col xs={3}>

                        <div onClick={this.props.source.bind(this, i, element.source, element.img, element.name)} key={i} className="music-item">
                            <div className="wrap"></div>


                            <img src={element.img} />
                            <h5>{element.name}</h5>

                        </div>
                    </Col>

                )
            }
        })
        
        const ListMusicKPop = albumsK.map((element, i) => {

            if (i <= 3) {
                return (
                    <Col xs={3}>

                        <div onClick={this.props.source.bind(this, i, element.source, element.img, element.name)} key={i} className="music-item">
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
                    <Col><div className="img-singer"><img src={firstSL} /></div><p>{element.singer}<span className="infor"></span></p></Col>
                </div>
            )
        })
        const ListTop = albums.map((element, i) => {

            if (i <= 10) {
                return (
                    <div>

                        <Col>
                            <p onClick={this.props.source.bind(this, i, element.source, element.img, element.name)} className="topms-bar"><span className="control"><BsFillPlayFill /></span>{element.name}<span className="view-ms">{element.time}</span></p>
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


            

                    <div className="list-music">
                        <h2 className="suggestions">GỢI Ý CHO HÔM NAY</h2>

                        <Row>
                            {ListMusic}
                        </Row>
                    </div>
                    <div className="list-music">
                        <h2 className="suggestions">Nhạc Việt</h2>

                        <Row>
                            {ListMusicV}
                        </Row>
                    </div>
                    <div className="list-music">
                        <h2 className="suggestions">Nhạc K-Pop</h2>

                        <Row>
                            {ListMusicKPop}
                        </Row>
                    </div>
                </Container>

            </>

        );
    }
}


export default HomePage;