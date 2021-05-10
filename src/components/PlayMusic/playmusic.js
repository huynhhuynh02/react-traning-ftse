import React from 'react'
import ButtonMS from '../Button/index'
import albums from '../../data.js'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-playlist-player'


class PlayMS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            play: '',

        }
        // alert(this.state.play)
    }
    one(q){
        var test = document.getElementsByClassName('title').innerHTML;

        // for(let i = 0; i < test.length; i ++){
            console.log(q)
            
        // }
    }
    render() {
        
       
        
        
        return (
            <div>
                {/* <audio controls autoPlay >
                    <source src={albums[this.props.link].source} type="audio/ogg" />
                    {/* <source src="horse.mp3" type="audio/mpeg" /> */}

                {/* </audio>  */}
                
                <div  onClick={this.one(this, this.props.currentPlayList)}   className="songImg" style={{animationPlayState: this.state.play ? 'running': 'paused'}}><img src={this.props.img} /></div>
            
                {/* {test} */}
                <AudioPlayer  currentPlayList={this.props.link} onToggle={({audioPlaying}) => {
                    this.setState({play: audioPlaying})
                    console.log(audioPlaying)
                }
                }/>
                

            </div>
        )
    }
}
export default PlayMS