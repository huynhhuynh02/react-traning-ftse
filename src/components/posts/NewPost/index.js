import React from 'react';
import { Button, Col, Jumbotron, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faImages, faFilm, faLink } from "@fortawesome/free-solid-svg-icons";

import "./../../../styles/posts/NewPost.css";
class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
        this.openBox = this.openBox.bind(this);
    }
    openBox() {
        this.setState({ isOpened: !this.state.isOpened })
    }
    render() {
        return (
            <>
                <Button
                    className="new-post-button"
                    disabled={this.state.isOpened}
                    variant="secondary"
                    onClick={this.openBox}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </Button>
                <Jumbotron className={this.state.isOpened ? "new-post-box" : "new-post-box d-none"}>
                    <Button
                        variant="danger"
                        className="close-button"
                        onClick={this.openBox}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                    <div className="box-title d-flex justify-content-center py-2 mb-4">
                        <span className="text-light font-weight-bold">New Post</span>
                    </div>
                    <textarea className="post-content px-2 py-2 mb-4 bg-white" placeholder="Điều bạn muốn nói ...">
                    </textarea>
                    <div className="attachment-list">
                        <Button variant="light" className="attachment-button font-weight-bold mr-3">
                            <FontAwesomeIcon className="attachment-icon mr-3" icon={faImages} size="lg" />
                            Ảnh
                        </Button>
                        <Button variant="light" className="attachment-button font-weight-bold mr-3">
                            <FontAwesomeIcon className="attachment-icon mr-3" icon={faFilm} size="lg" />
                            Video
                        </Button>
                        <Button variant="light" className="attachment-button font-weight-bold mr-3">
                            <FontAwesomeIcon className="attachment-icon mr-3" icon={faLink} size="lg" />
                            Đường dẫn
                        </Button>
                    </div>
                    <Button variant="success" className="post-button font-weight-bold px-5 py-2">
                        Đăng bài
                    </Button>
                </Jumbotron>
            </>
        );
    }
}


export default NewPost;