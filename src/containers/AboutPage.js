import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import '../styles/personalstyle.css';
import accout from '../data/account'
import Atn from '../data/clickmethod';
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            flag: 'false'
        }
        this.accountHandleChangle = this.accountHandleChangle.bind(this)
        this.passwordHandleChangle = this.passwordHandleChangle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.text = this.text.bind(this)
    }

    accountHandleChangle(event){
        this.setState({
            account: event.target.value
        })
        console.log(event.target.value)
    }
    passwordHandleChangle(event){
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
        
    }
    onSubmit(){
        for(var i = 0; i < accout.length; i++){
            if(this.state.account == accout[i].user){
                alert('true')
                this.setState({
                    flag: 'true',
                    login: 'logined'
                })
            }else{
                alert(this.state.account)
            }
        }
        
    }

    render() {
        if(this.state.login == 'logined'){
            return("dawng nhap thanh cong")
        }else{
            return (
                <>
                    <Container>
                        <form  className="login">
                            <input type="text" className="btn-accout" value={this.state.account} onChange={this.accountHandleChangle} placeholder="username" />
                            <input type="text" className="btn-accout" value={this.state.password} onChange={this.passwordHandleChangle} placeholder="password" />
                            <div className="btn-login" onClick={this.onSubmit}>Login</div>
                            <p>Chưa có tài khoản? <span><a href="#"> Đăng ký.</a></span></p>
                        </form>
                    </Container>
                </>
    
            );
        }
        
    }
}


export default AboutPage;