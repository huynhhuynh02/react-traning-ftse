import React from 'react';
import '../../style/Topchartmini.css';
import { BsFillPlayFill, BsPlusSquareFill } from 'react-icons/bs';
class Topchart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Level row pl-3 pr-3" style={{ color: 'white',marginTop:'5px' }}>
                <div className="col-1 Number p-0 m-0">
                    <h4>{this.props.stt}</h4>
                </div>
                <div className="col-3 p-0 Picture Csspic" style={{backgroundImage: `url(${this.props.imgBG})`}}>
                </div>
                <div className="col-5 pl-3  Name-song">
                    <h4>{this.props.Namesong}</h4>
                    <p>{this.props.Nameartist}</p>
                </div>
                <div className="col-1 p-0 Timing">
                    <h5>{this.props.Timing}</h5>
                </div>
                <div className='col-2 p-0 Control'>
                    <BsFillPlayFill></BsFillPlayFill>
                    <BsPlusSquareFill></BsPlusSquareFill>
                </div>
            </div>
        );

    }

}
export default Topchart;