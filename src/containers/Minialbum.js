import React, { Component } from 'react';
import Mnalbumtitle from '../components/Mnalbumtitle';
import Albumsong from "../components/Albumsong";
import {albums} from './../data';
import { GiTrophiesShelf } from 'react-icons/gi';
class Minialbum extends Component {
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            isPlay: false,
            currentSong: 0,
            duration: 0,
            currentTime: 0,
            isMuted: false,
            currentAblum:0
        }
       
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        let index = albums.findIndex((element)=>{
            return element.id == id
        });
        this.setState({
            currentAblum: index
        });
    }
    handlingNe = () => {
        if (this.state.currentSong < albums[0].list.length - 1) {
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
        },()=>{
            if (this.state.isPlay) {
                this.audioRef.current.play();
              } else {
                this.audioRef.current.pause();
              }
        })
    }
    handlingLoad=()=>{
        this.setState({
            duration: this.audioRef.current.duration
        },()=>{
            console.log(this.state.duration);
        });
        if(this.state.isPlay){this.audioRef.current.play()}
    };
    handleTimeSliderChange= ({x})=>{
        this.audioRef.current.currentTime=x;
        this.setState({
            currentTime:x
        });
        if(!this.state.isPlay){
            this.setState({
                isPlay:true
            })
            this.audioRef.current.play();
        }
    };
    onMuted=()=>{
        this.setState({
            isMuted: !this.state.isMuted
        }, () =>{
            if(this.state.isMuted){
                this.audioRef.current.volume = 0;
            }else{
                this.audioRef.current.volume = 1;
            }
        })
    }
    onSelectSong(index){
       this.setState({
           currentSong: index
       });
       let song =  albums[this.state.currentAblum].list[index];
       let store = JSON.parse(localStorage.getItem('historySong'));
       if(store.length >0) {
           if(store.findIndex(element => element.id == song.id) == -1) {
               store.push(song);
           }
       } else {
            store.push(song);
       }
       
       localStorage.setItem('historySong',JSON.stringify(store));
       console.log(store);
    }
    render(){
        const songList=albums[this.state.currentAblum].list.map((item, index)=>
            <Albumsong 
                onSelect= { this.onSelectSong.bind(this, index)} 
                stt={item.id}
                namesong={item.song}
                nameart={item.artist}
            >
            </Albumsong>
        )
        return(
            <div className="Minialbum-page pt-3">
                <Mnalbumtitle
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
                    isMuted = {this.state.isMuted}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    namesong={albums[this.state.currentAblum].list[this.state.currentSong].song}
                    nameartist={albums[this.state.currentAblum].list[this.state.currentSong].artist}
                    imgSong={albums[this.state.currentAblum].list[this.state.currentSong].picture}
                    imgAlbum={albums[this.state.currentAblum].image}
                    onMuted = {this.onMuted}
                ></Mnalbumtitle>
                {songList}
                <audio
                 ref={this.audioRef} src={albums[this.state.currentAblum].list[this.state.currentSong].link}
                 onLoadedData={this.handlingLoad}
                 onTimeUpdate={() => {
                    console.log(this.state.currentTime);
                    console.log(this.state.duration);
                    this.setState({ currentTime: this.audioRef.current.currentTime},()=>{
                        if(this.state.currentTime == this.state.duration){
                            if(this.state.currentSong < albums[this.state.currentAblum].list.length-1){
                                this.setState({currentSong:this.state.currentSong+=1})
                            }
                        }
                    })
                 }}
                 />
            </div>

        );
    }
}
export default Minialbum;