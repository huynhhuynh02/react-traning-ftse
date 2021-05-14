import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nearbytitle from '../components/Nearbytitle';
import Mnalbumtitle from '../components/Mnalbumtitle';
import Albumsong from "../components/Albumsong";
import './../style/Nearby.css';
class Nearby extends React.Component{
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
        
        this.state = {
            isPlay: false,
            currentSong: 0,
            duration: 0,
            currentTime: 0,
            isMuted: false,
            historyList: []
        }
       
        
    }
    componentWillMount () {
        const historyList= JSON.parse(localStorage.getItem('historySong'));
        this.setState({
            ...this.state,
            historyList:historyList
        });
        console.log(this.state.historyList);
    }
    handlingNe = () => {
        
        if (this.state.currentSong < this.state.historyList[0].list.length - 1) {
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
    onSelectSong(index){
        // this.setState({
        //     currentSong: index
        // });
        // let song =  this.state.historyList[index];
        // const store = JSON.parse(localStorage.getItem('historySong'));
        // if(store.length >0) {
        //     if(store.findIndex(element => element.id == song.id) == -1) {
        //         store.push(song);
        //     }
        // } else {
        //      store.push(song);
        // }
        // localStorage.setItem('historySong',JSON.stringify(store));
     }
    
     render(){
        const songList=this.state.historyList.map((item, index)=>
            <Albumsong 
                onSelect= { this.onSelectSong.bind(this, index)} 
                stt={item.id}
                namesong={item.song}
                nameart={item.artist}
            >
            </Albumsong>
        )
        if(this.state.historyList.length>0) {
            return (
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
                        namesong={this.state.historyList[0].song}
                        nameartist={this.state.historyList[this.state.currentSong].artist}
                        imgSong={this.state.historyList[this.state.currentSong].picture}
                        imgAlbum={''}
                        onMuted = {this.onMuted}
                    ></Mnalbumtitle>
                    {songList}
                    <audio
                     ref={this.audioRef} src={this.state.historyList[this.state.currentSong].link}
                     onLoadedData={this.handlingLoad}
                     onTimeUpdate={() => {
                        console.log(this.state.currentTime);
                        console.log(this.state.duration);
                        this.setState({ currentTime: this.audioRef.current.currentTime},()=>{
                            if(this.state.currentTime == this.state.duration){
                                if(this.state.currentSong < this.state.historyList.length-1){
                                    this.setState({currentSong:this.state.currentSong+=1})
                                }
                            }
                        })
                     }}
                     />
                </div>
    
            );
        }
        return (
            <h2>Danh sách nghe trống!!!</h2>
        )
        
    }
}
export default Nearby;