import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import axios from 'axios'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
    }
    onSubmit(e) {
        e.preventDefault();
        const apiEndPoint = 'https://6097f2a9e48ec000178731f4.mockapi.io/api/users';
        const addForm = document.getElementById('addForm');

        axios.get(apiEndPoint).then((res) => {
            let repoint = res.data;

            
        })

        const fromData = new FormData(addForm)
        const data = {
            username: fromData.get('username'),
            password: fromData.get('password'),
            fullname: fromData.get('fullname'),
            phone: fromData.get('phone'),
            gmail: fromData.get('gmail'),
        }



        axios.post(apiEndPoint, data).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <>
                <Container>
                    <div>
                        <form id='addForm' onSubmit={this.onSubmit}>
                            <label>fullname</label>
                            <input className="form-control" type="text" name="fullname" />
                            <label>username</label>
                            <input className="form-control" type="text" name="username" />

                            <label>password</label>
                            <input className="form-control" type="text" name="password" />
                            <label>gmail</label>
                            <input className="form-control" type="text" name="gmail" />

                            <label>phone</label>
                            <input className="form-control" type="text" name="phone" />
                           

                            <button type="submit">SignUp</button>
                        </form>
                    </div>
                </Container>
            </>
        )
    }
}

export default SignUp