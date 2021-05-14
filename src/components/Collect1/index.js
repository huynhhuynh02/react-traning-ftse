import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/Collect1.css";
import { Link } from "react-router-dom";
import {albums} from './../../data';
class Collect1 extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            data: []
        }
    }
    
    render() {

        const categories = albums.map((item,index) =>{
            if(index <= this.props.limit && index >= this.props.offset){
                return(
                    <div className="Items col-3 p-1" key={item.id}>
                        <Link to={`albums/${item.id}`}>
                            <div className="Item">
                                <img src={item.image} />
                            </div>
                            <h5>{item.name}</h5>
                        </Link>
                    </div>
                )
            }
        })
        return (
            <div className="List col-12 p-0">
                {categories}
            </div>
        );
    }
};
export default Collect1;