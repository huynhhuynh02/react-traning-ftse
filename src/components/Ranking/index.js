import React from 'react';
import '../../style/Ranking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Ranking extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        return (
            <div className="Ranking mt-5">
                <div style={{ display: 'flex' }}>
                    <div className="Number">{this.props.number}</div>
                    <div className="Ranking-img">
                        <img src={this.props.imgBG} />
                    </div>
                    <div className="Ranking-song">
                        <div className="Name-song">
                            <h3>{this.props.name}</h3>
                        </div>
                        <div className='Name-artist'>
                            {this.props.nameArt}
                        </div>
                    </div>
                </div>
                <div className="Time">
                    {this.props.time}
                </div>
            </div>
        );
    }
}
export default Ranking;