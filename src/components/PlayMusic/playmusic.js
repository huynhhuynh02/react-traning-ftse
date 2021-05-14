
import React from 'react'
import AudioPlayer from 'react-playlist-player'
import '../../styles/playmusic.css'


class PlayMS extends React.Component {
    constructor(props) {
        super(props)
        

    }
    render() {
        return (
            <div>
                <AudioPlayer currentPlayList={this.props.link} onToggle={({audioPlaying}) => console.log(this.props.link.songs)}/>
            </div>
        )
    }
}
export default PlayMS