import React from 'react'
import albums from '../../data';


const abject = [];
class PlayListone extends React.Component{
    render(){
        albums.map((element, i)=> {

            a.push(element.name)
        })
        
        return(
            <div>{a}</div>
        )
    }
}

export default PlayListone;
export default abject;