import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { BsFillPlayFill } from 'react-icons/bs'
class MusicID extends React.Component {
    constructor(props) {
        super(props)



    }

    render() {
        let ant = this.props.getAlbums.songs;
        console.log(ant)
        const reloadAlbums = ant.map((element, i) => {
            if(i == 0){
                return (


                    <>
                        <Row>
                            <Col><p className="playing-playlist"><span className="control"></span>{element.songName}<span className="view-ms">playing...</span></p></Col>
                        </Row>
                    </>
                )
            }else{
            
            return (


                <>
                    <Row>
                        <Col>{i}<p onClick={this.props.getItemPlaylist.bind(this, i, ant, this.props.getAlbums.playlistCoverUrl)} className="topms-bar"><span className="control"><BsFillPlayFill /></span>{element.songName}<span className="view"></span></p></Col>
                    </Row>
                </>
            )
            }
        })

        console.log(ant)    
        return (

            <div>
                <Container>
                    <Row>
                        <Col><img src={this.props.getAlbums.playlistCoverUrl} /></Col>
                        <Col> {reloadAlbums}</Col>
                    </Row>

                </Container>

            </div>
        )
    }
}

export default MusicID;