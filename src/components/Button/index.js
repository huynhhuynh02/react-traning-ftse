import React from 'react';
import '../../styles/ButtonComponent.css'
class ButtonMS extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <button className='buttonms'   onClick={this.props.onclick}>
                <img src={this.props.img}/>
                <h2>{this.props.name}</h2>
            </button>
        );
    }
}


export default ButtonMS;