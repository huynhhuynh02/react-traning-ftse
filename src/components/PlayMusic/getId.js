import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import playlist from "../../album"
import albums from "../../data"
import PlayMS from "./playmusic"


class GetId extends React.Component {
    constructor(props) {
        super(props)


        
    }
    

    
    render() {

        // const listAlbums = albums.map((element, i) => {
        //     return (
        //         <Row>
        //             <Col><p><span>{i}</span>{element.name}</p></Col>
        //         </Row>
        //     )
        // })
        // setInterval(this.thu(), 5000)
        const div = {
            top: '50px'
        }
        let tam = this.props.address.songs
        // console.log(this.props.address)
        const lap = tam.map((element, i)=>{
            let nameclass = 'item-music-playlist' + String(element.position)
            return(
                <>
                <Row className="table-music">
                    <Col onClick={this.props.getPlaylist.bind(this, i , tam, this.props.address)}  className={nameclass} ><div className="item-img"><img src={element.img}/></div><div class="text-playlist" ><p  ><span>{element.position}</span>{element.songName}</p></div></Col>
                </Row>
            
            </>
            )
        })

        // const tam = playlist
        return (

            <>  <Container>
                <div className="playlistBody">
                
                    <Row>
                        <Col>
                            <div className="album-img"><img src={this.props.address.imgSong} /></div>
                        </Col>
                        <Col>
                            <div className="song-name">
                            {lap}
                            </div>
                        </Col>
                    </Row>
                    <p id="test" onClick={this.thu}>asfsdfasd</p>

                    
                           
                
                </div>
                </Container>
            </>
        )
        
    }
}

export default GetId;