import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Songs.css';
class Songs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div onClick={this.props.onSelect} className="Songs col-12 pt-3">
                <h4>{this.props.stt}</h4>.<h4>{this.props.namesong}</h4>-<h5>{this.props.nameartist}</h5>
            </div>
        );
    }
}
export default Songs;