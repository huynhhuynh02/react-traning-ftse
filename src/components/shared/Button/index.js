import React from 'react';
class Button extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <button className='button' onClick={this.props.onClick}>Button {this.props.increment}</button>
        );
    }
}


export default Button;