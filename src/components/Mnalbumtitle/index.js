import React from 'react';
import "../../style/Mnalbumtitle.css";
import cafe from "../../images/cafe.jpg";
import mood from "../../images/mood.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdLibraryAdd } from "react-icons/md";
import { FiDownload, FiPause, FiPlay } from "react-icons/fi";
import { GiShare, GiSpeaker } from "react-icons/gi";
import {ImVolumeMute2} from "react-icons/im";
import { VscDebugReverseContinue, VscDebugContinue } from "react-icons/vsc";
import Slider from "react-input-slider";
class Mnalbumtitle extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const isPlayButton = this.props.isPlay ? <FiPause onClick={this.props.handlingPlay}></FiPause> : <FiPlay onClick={this.props.handlingPlay}></FiPlay>
        const muteMusic=this.props.isMuted ? <ImVolumeMute2 onClick={this.props.onMuted}></ImVolumeMute2>: <GiSpeaker onClick={this.props.onMuted}></GiSpeaker>
        return (
            <div className="Mnalbum-title" style={{ backgroundImage: `url(${this.props.imgAlbum})` }}>
                <div className="container-fluid p-0">
                    <div className="row p-3">
                        <div className="Bg-Album col-3">
                            <img src={this.props.imgSong} />
                        </div>
                        <div className="Name-album col-9">
                            <div>
                                <h1>{this.props.namesong}</h1>
                                <h5>{this.props.nameartist}</h5>
                            </div>
                            <div className="Tool">
                                <MdLibraryAdd></MdLibraryAdd>
                                <FiDownload></FiDownload>
                                <GiShare></GiShare>
                            </div>
                            <div className="Control">
                                <div className="Line">
                                    <Slider className="Slider"
                                        axis="x"
                                        xmin={0}
                                        xmax={parseInt(this.props.duration)}//tổng thời gian bài nhạc
                                        xstep={1}//bước chạy
                                        x={parseInt(this.props.currentTime)}//X chạy
                                        onChange={this.props.handleTimeSliderChange}
                                        
                                    />
                                </div>
                                <div className="Direct">
                                    <div>
                                        <VscDebugReverseContinue onClick={this.props.handlingPrevious}></VscDebugReverseContinue>
                                        {isPlayButton}
                                        <VscDebugContinue onClick={this.props.handlingNext}></VscDebugContinue>
                                    </div>
                                    <div>
                                        {muteMusic}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Mnalbumtitle;