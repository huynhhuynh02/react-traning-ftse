import React from 'react';
import '../style/Lyrics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdLibraryAdd } from "react-icons/md";
import { FiDownload, FiPause, FiPlay } from "react-icons/fi";
import { GiShare, GiSpeaker } from "react-icons/gi";
import { VscDebugReverseContinue, VscDebugContinue } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
import Lyricstitle from "../components/Lyrics-title";
import Songs from "../components/songs";
import data from '../data';

class Lyrics extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            isPlay: false,
            currentSong: 0,
            duration: 0,
            currentTime: 0,
            isMuted: false,

        }
    }
    handlingNe = () => {
        if (this.state.currentSong < data.length - 1) {
            this.setState({
                currentSong: this.state.currentSong += 1
            });
        }
    }
    handlingPre = () => {
        if (this.state.currentSong > 0) {
            this.setState({
                currentSong: this.state.currentSong -= 1
            });
        }
    }
    handlingPlay = () => {
        this.setState({
            isPlay: !this.state.isPlay
        }, () => {
            if (this.state.isPlay) {
                this.audioRef.current.play();
            } else {
                this.audioRef.current.pause();
            }
        })
    }
    handlingLoad = () => {
        this.setState({
            duration: this.audioRef.current.duration
        });
        if (this.state.isPlay) { this.audioRef.current.play() }
    };
    handleTimeSliderChange = ({ x }) => {
        this.audioRef.current.currentTime = x;
        this.setState({
            currentTime: x
        });
        if (!this.state.isPlay) {
            this.setState({
                isPlay: true
            })
            this.audioRef.current.play();
        }
    };
    onMuted = () => {
        this.setState({
            isMuted: !this.state.isMuted
        }, () => {
            if (this.state.isMuted) {
                this.audioRef.current.volume = 0;
            } else {
                this.audioRef.current.volume = 1;
            }
        })
    };
    onSelectSong(index) {
        this.setState({
            currentSong: index
        });
    }
    render() {
        const songlist = data.map((item, index) =>
            <Songs
                onSelect={this.onSelectSong.bind(this, index)}
                stt={item.id}
                namesong={item.song}
                nameartist={item.artist}
            ></Songs>
        )
        return (

            <div className="Lyrics-page mt-3">
                <div className="container-fluid m-0" style={{ paddingLeft: '40px' }}>
                    <Lyricstitle
                        isPlay={this.state.isPlay}
                        handlingNext={
                            this.handlingNe
                        }
                        handlingPrevious={
                            this.handlingPre
                        }
                        handlingPlay={
                            this.handlingPlay
                        }
                        handleTimeSliderChange={this.handleTimeSliderChange}
                        currentTime={this.state.currentTime}
                        duration={this.state.duration}
                        src={data[this.state.currentSong].link}
                        namesong={data[this.state.currentSong].song}
                        nameartist={data[this.state.currentSong].artist}
                        imageBG={data[this.state.currentSong].picture}
                        onMuted={this.onMuted}
                        isMuted={this.state.isMuted}
                    >
                    </Lyricstitle>
                </div >
                <div className="container-fluid mt-3" style={{ paddingLeft: '40px' }}>
                    <div className="Lyrics-song row p-3" style={{ backgroundColor: '#18181D', borderRadius: '15px' }}>
                        {songlist}
                    </div>
                </div>
                <audio
                    ref={this.audioRef} src={data[this.state.currentSong].link}
                    onLoadedData={this.handlingLoad}
                    onTimeUpdate={() => {   
                        this.setState({ currentTime: this.audioRef.current.currentTime},()=>{
                            if(this.state.currentTime==this.state.duration){
                                if(this.state.currentSong<data.length-1){
                                    this.setState({
                                        currentSong:this.state.currentSong+=1})
                                }
                            }
                        })
                    }}
                />
            </div >

        );
    }
}
export default Lyrics;










