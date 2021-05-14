import React from 'react';
import {FaUndoAlt,FaPause} from 'react-icons/fa';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';
import {FiShuffle} from 'react-icons/fi';
import '../../style/Playlist.css';
class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Playlist pb-3">
                <div className="See-all pl-3 pr-3 pb-1">
                    <h4>player</h4>
                </div>
                <div className="Pic-playlist pl-3 pr-3" style={{backgroundImage: `url(${this.props.imgBG})`}}>
                </div>
                <div className="Title-playlist pt-3 pl-3 pr-3 " style={{ color: 'white', textAlign: 'center' }}>
                    <h3>{this.props.nameSong}</h3>
                    <h4>{this.props.nameArtist}</h4>
                    <p>{this.props.album}</p>
                </div>
                <div className="Control-playlist pl-3 pr-3">
                    <FaUndoAlt></FaUndoAlt>
                    <IoIosArrowBack></IoIosArrowBack>
                    <FaPause></FaPause>
                    <IoIosArrowForward></IoIosArrowForward>
                    <FiShuffle></FiShuffle>
                </div>
            </div>
        );
    }
}
export default Playlist;