import React from 'react'

class Atn extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <button onClick={this.props.clickthod.bind(this, 3)}></button>
            </div>
        )
    }
}

export default Atn;