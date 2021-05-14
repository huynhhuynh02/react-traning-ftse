import React from 'react';
import "../../style/Albumsong.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class Albumsong extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div onClick={this.props.onSelect} className="albumSongs col-12 pt-3">
                <div className="container-fluid p-0">
                    <h4>{this.props.stt}</h4>.<h4>{this.props.namesong}</h4>-<h5>{this.props.nameart}</h5>
                </div>

            </div>
        );
    }
}
export default Albumsong;