import React from 'react';
import { Link, NavLink, Router } from 'react-router-dom';
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
import playlist from '../album'
class albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
        }
    }
    render() {
        const listAlbums = playlist.map((element, i) => {
            return (
                <>
                    <Col xs={3}>
                        <div className="item-playlist">
                            <NavLink to="/getId" onClick={this.props.albums.bind(this, i)} ant={i} ><img src={element.playlistCoverUrl} /><p>{element.bandName}</p></NavLink>
                        </div>
                    </Col>
                </>)

        })


        return (
            <>
                <Container>
                    <Row>
                        {listAlbums}
                    </Row>

                </Container>
            </>
        );
    }
}


export default albums;