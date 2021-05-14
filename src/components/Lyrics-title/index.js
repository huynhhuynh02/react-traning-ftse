import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Lyricstitle.css';
import { MdLibraryAdd } from "react-icons/md";
import { FiDownload, FiPause, FiPlay } from "react-icons/fi";
import { GiShare, GiSpeaker } from "react-icons/gi";
import { VscDebugReverseContinue, VscDebugContinue } from "react-icons/vsc";
import data, { albums } from '../../data';
import {ImVolumeMute2} from "react-icons/im";
import Slider from "react-input-slider";
class Lyricstitle extends React.Component {
    constructor(props) {
        super(props)
    };
    
    render() {
        const isPlayButton = this.props.isPlay ? <FiPause onClick={this.props.handlingPlay}></FiPause> : <FiPlay onClick={this.props.handlingPlay}></FiPlay>
        const muteMusic=this.props.isMuted ? <ImVolumeMute2 onClick={this.props.onMuted}></ImVolumeMute2>: <GiSpeaker onClick={this.props.onMuted}></GiSpeaker>
        return (
            <div className="Lyrics-title row p-3" style={{ backgroundColor: '#18181D', borderRadius: '15px' }}>
                <div className="Bg-title col-3">
                    <img src={this.props.imageBG} />
                </div>
                <div className="Namesong-title col-9">
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
        );
    }
}
export default Lyricstitle;