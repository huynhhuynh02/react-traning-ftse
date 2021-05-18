import React from 'react';
import { Button, Jumbotron, Form, FormFile, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPhotoVideo, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { firebase } from "./../../../App";
import generateId from "./../../../resources/functions/generateId"

import "./../../../styles/posts/NewPost.css";
import LoaderSpinner from "./../../common/LoaderSpinner";

export default class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            openEditThumbnails: false,
            postContent: "",
            filesUpload: [],
            fileTransferProgress: 0,
            uploadState: "no-upload"
        }
        this.openBox = this.openBox.bind(this);
        this.handlePostContentInput = this.handlePostContentInput.bind(this);
        this.handleChangeThumbnails = this.handleChangeThumbnails.bind(this);
        this.handleUploadFiles = this.handleUploadFiles.bind(this);
        this.handleEditThumbnails = this.handleEditThumbnails.bind(this);
    }
    openBox() {
        this.setState({ isOpened: !this.state.isOpened })
    }
    handlePostContentInput(e) {
        this.setState({ postContent: e.target.value })
    }
    handleChangeThumbnails(e) {
        let itemList = [];
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files.length; i++) {
                itemList.push(e.target.files.item(i))
            }
        }
        this.setState({
            filesUpload: itemList
        })
    }
    handleEditThumbnails() {
        this.setState({
            openEditThumbnails: !this.state.openEditThumbnails
        })
    }
    handleUploadFiles() {
        this.setState({
            uploadState: "uploading"
        })
        const now = new Date();
        const userId = localStorage.getItem("id");
        const databaseThumbnailList = [];
        const database = firebase.firestore();
        const storage = firebase.storage();
        if (this.state.filesUpload.length !== 0) {
            this.state.filesUpload.forEach((file) => {
                databaseThumbnailList.push({
                    data: generateId() + "." + file.type.slice(file.type.indexOf("/") + 1),
                    type: file.type.slice(0, file.type.indexOf("/"))
                })
            })
        }
        database.collection("posts").add({
            commented: {
                amount: 0,
                userCommented: []
            },
            createdAt: now,
            liked: {
                amount: 0,
                userLiked: []
            },
            shared: {
                amount: 0,
                userShared: []
            },
            textContent: this.state.postContent,
            thumbnails: databaseThumbnailList,
            userId: userId
        }).then((ref) => {
            console.log("Added document with ID", ref.id);
            database.collection("users").doc(userId).get()
                .then((doc) => {
                    database.collection("users").doc(userId).update({
                        postList: doc.data().postList.concat(ref.id)
                    }).then(() => {
                        console.log("Added post id into user data");
                        if (this.state.filesUpload.length !== 0) {
                            for (let i = 0; i < this.state.filesUpload.length; i++) {
                                const file = this.state.filesUpload[i];
                                const filePath = databaseThumbnailList[i].type + "s/" + databaseThumbnailList[i].data;
                                console.log("Uploading to " + filePath);
                                var uploadRef = storage.ref();
                                var uploadTask = uploadRef.child(filePath);
                                uploadTask.put(file)
                                    .on('state_changed', (fileUploading) => {
                                        console.log('Upload is ' + fileUploading.bytesTransferred + "/" + fileUploading.totalBytes);
                                        this.setState({
                                            fileTransferProgress: ((fileUploading.bytesTransferred / fileUploading.totalBytes) * 100).toFixed(0)
                                        })
                                        switch (fileUploading.state) {
                                            case firebase.storage.TaskState.PAUSED: // or 'paused'
                                                console.log('Upload is paused');
                                                break;
                                            case firebase.storage.TaskState.RUNNING: // or 'running'
                                                console.log('Upload is running');
                                                break;
                                            default:
                                                console.log("Unknown errors during the upload!");
                                        }
                                    }, error => {   // handle error while uploading
                                        console.log("Error while upaloading: ", error);
                                        alert("Đăng bài thất bại, kiểm tra đường truyền sau đó thử lại!");
                                    }, () => {
                                        this.setState({
                                            uploadState: "uploaded"
                                        })
                                    })
                            }
                        } else {
                            let fakeUploading = setInterval(() => this.setState({
                                fileTransferProgress: this.state.fileTransferProgress + 2
                            }), 50);
                            let waitForProgress = setTimeout(() => {
                                this.setState({
                                    uploadState: "uploaded"
                                })
                                clearInterval(fakeUploading);
                                clearTimeout(waitForProgress);
                            }, 3000);
                        }
                    }).catch((err) => {
                        console.log("Error adding post id to user data: id", doc.id, err);
                    })
                }).catch((err) => {
                    console.log("Error getting user data: ", err);
                })
        }).catch((err) => {
            console.log("Errors adding data: ", err);
        })
    }
    render() {
        if (this.state.isOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
        if (this.state.uploadState === "uploaded") {
            this.props.updatePost();
            return <></>;
        }
        return (
            <>
                {this.state.uploadState === "uploading" ? <LoaderSpinner progressbar={true} percentage={this.state.fileTransferProgress} /> : <></>}
                <Jumbotron className={this.state.isOpened ? "new-post-box" : "new-post-box d-none"}>
                    <Button
                        variant="danger"
                        className="close-button"
                        onClick={this.openBox}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                    <div className="box-title d-flex justify-content-center py-2 mb-4">
                        <span className="text-secondary font-weight-bold">Bài viết mới</span>
                    </div>
                    <textarea
                        className="post-content px-2 py-2 mb-4 bg-white"
                        placeholder="Điều bạn muốn nói ..."
                        onChange={this.handlePostContentInput}>
                    </textarea>
                    <div className="attachment-list d-flex justify-content-start align-items-start">
                        <Form.File
                            className="attachment-button font-weight-bold mr-3">
                            <FormFile.Label className="attachment-label mb-0 px-3 py-2 bg-light" htmlFor="mediaUpload">
                                <FontAwesomeIcon className="attachment-icon mr-3" icon={faPhotoVideo} size="lg" /> Ảnh hoặc Video
                            </FormFile.Label>
                            <FormFile.Input accept="image/*,video/*" multiple className="attachment-input" id="mediaUpload" onChange={this.handleChangeThumbnails} />
                        </Form.File>
                    </div>
                    <Row className="thumbnail-list mx-0 mt-3 justify-content-start align-items-start position-relative">
                        {
                            (this.state.filesUpload.length !== 0) ?
                                this.state.filesUpload.map((thumbnail, i) => {
                                    if (i < 2) {
                                        return (
                                            <Col xs={6} className="thumbnail-item text-center" key={i}>
                                                {
                                                    thumbnail.type.startsWith("image/") ?
                                                        <Image className="image" src={URL.createObjectURL(thumbnail)} thumbnail rounded />
                                                        :
                                                        <div className="video">
                                                            <FontAwesomeIcon icon={faPlayCircle} size="lg" className="fake-play-button" />
                                                            <video className="video-thumbnail" src={URL.createObjectURL(thumbnail)}></video>
                                                        </div>
                                                }
                                            </Col>
                                        )
                                    } else {
                                        return <></>
                                    }
                                }) :
                                <></>
                        }
                        {
                            this.state.filesUpload.length > 2 ?
                                <Col xs={6} className="thumbnail-item-exceed text-center">
                                    {"+" + (this.state.filesUpload.length - 2)}
                                </Col> :
                                <></>
                        }
                        <Button
                            className={"clear-files-button" + (this.state.filesUpload.length !== 0 ? "" : " d-none")}
                            variant="secondary"
                            onClick={this.handleEditThumbnails}>
                            Chỉnh sửa đính kèm
                        </Button>
                    </Row>
                    <Button variant="success"
                        disabled={(this.state.filesUpload.length !== 0) || (this.state.postContent !== "") ? false : true}
                        className="post-button font-weight-bold px-5 py-2" onClick={this.handleUploadFiles}>
                        Đăng bài
                    </Button>
                </Jumbotron>
                {this.state.isOpened ? <div className="new-page-blur-cover"></div> : <></>}
                <Button
                    className="new-post-button"
                    disabled={this.state.isOpened}
                    variant="secondary"
                    onClick={this.openBox}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </Button>
            </>
        );
    }
}