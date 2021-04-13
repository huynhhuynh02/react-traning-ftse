import React from 'react';
import { Container } from 'react-bootstrap';

class FriendPage extends React.Component {
    render() {
        return (
            <>
                <UserSideBar />
                <Container fluid className="page d-flex fixed">
                    <div className="left-box">
                        <Shortcut />
                    </div>
                    <div className="main-box d-flex flex-column justify-content-center pt-4">
                        <SearchBar targetsearch="danh sách bạn bè" />
                        <FriendControl />
                    </div>
                    <div className="right-box">
                        <Contact height="586px" listheight="520px" mt="1" />
                    </div>
                </Container>
            </>
        );
    }
}


export default FriendPage;