import React from 'react';
import '../../style/Artis.css';
class Artist extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="Name-artist col-2">
                <img src={this.props.imgBG}/>
                <h5>{this.props.title}</h5>
                <p>{this.props.countlisten}</p>
            </div>

        )
    }

}
export default Artist;