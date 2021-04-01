import React from 'react';
import Button from '../components/Button'; 
class HomePage extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            increment:0
        }
        this.couterIncremnt = this.couterIncremnt.bind(this);
    }
    couterIncremnt(){
        this.setState({
            increment: this.state.increment+=1
        })
    }
        
    render(){
        return(
            <>
                <h1>Home Page</h1>
                <h1>{this.state.increment}</h1>
                <Button onClick={this.couterIncremnt}/>
            </>
            
        );
    }
}


export default HomePage;