import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Topchart-title.css';
import { FiPlayCircle, FiShuffle } from "react-icons/fi";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
class Title extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        return (
            <div className="Topchart-title" style={{ marginRight: '63px', display: 'flex' }}>
                <div className="Topchart-brand" style={{backgroundImage: `url(${this.props.imgBG})`}}>
                </div>
                <div className="Topchart-list">
                    <div className="Topchart-name">
                        <h3>{this.props.nameTC}</h3>
                        <h4>Playlist by Nammusic</h4>
                        <p>{this.props.amount}</p>
                    </div>
                    <div className="Topchart-control">
                        <div className='Play'>
                            <Link to="./lyrics">
                                <Button variant="primary">
                                    <FiPlayCircle></FiPlayCircle>
                                    <h6>Play</h6>
                                </Button>
                            </Link> 
                        </div>
                        {/* <div className='Shuffle'>
                            <Button variant="primary">
                                <FiShuffle></FiShuffle>
                                <h6>Shuffle</h6>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
} 
export default  Title;