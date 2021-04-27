import React from 'react';
import { Button, Jumbotron, Form, FormFile, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faImages, faFilm, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import VideoThumbnail from "react-video-thumbnail";

import { firebase } from "./../../../App";
import generateId from "./../../../resources/functions/generateId"

import "./../../../styles/posts/NewPost.css";
import LoaderSpinner from "./../../common/LoaderSpinner";
class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            postContent: "",
            thumbnailsImage: [],
            thumbnailsVideo: [],
            filesUpload: [],
            fileTransferProgress: 0,
            uploadState: "no-upload"
        }
        this.openBox = this.openBox.bind(this);
        this.handlePostContentInput = this.handlePostContentInput.bind(this);
        this.handleChangeThumbnailImage = this.handleChangeThumbnailImage.bind(this);
        this.handleChangeThumbnailVideo = this.handleChangeThumbnailVideo.bind(this);
        this.handleUploadFiles = this.handleUploadFiles.bind(this);
        this.clearAllUploadFiles = this.clearAllUploadFiles.bind(this);
    }
    openBox() {
        this.setState({ isOpened: !this.state.isOpened })
    }
    handlePostContentInput(e) {
        this.setState({ postContent: e.target.value })
    }
    handleChangeThumbnailImage(e) {
        let itemList = [];
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files.length; i++) {
                itemList.push(e.target.files.item(i))
            }
        }
        this.setState({
            thumbnailsImage: itemList,
            filesUpload: itemList.concat(this.state.thumbnailsVideo)
        })
    }
    handleChangeThumbnailVideo(e) {
        let itemList = [];
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files.length; i++) {
                itemList.push(e.target.files.item(i))
            }
        }
        this.setState({
            thumbnailsVideo: itemList,
            filesUpload: itemList.concat(this.state.thumbnailsImage)
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
                    })
                        .then(() => {
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
                                            let progress = (fileUploading.bytesTransferred / fileUploading.totalBytes) * 100;
                                            console.log('Upload is ' + fileUploading.bytesTransferred / fileUploading.totalBytes);
                                            this.setState({
                                                fileTransferProgress: Number(progress.toFixed(0))
                                            })
                                            switch (fileUploading.state) {
                                                case firebase.storage.TaskState.PAUSED: // or 'paused'
                                                    console.log('Upload is paused');
                                                    break;
                                                case firebase.storage.TaskState.RUNNING: // or 'running'
                                                    console.log('Upload is running');
                                                    break;
                                            }
                                        }, error => {   // handle error while uploading
                                            console.log("Error while upaloading: ", error);
                                            alert("Đăng bài thất bại, kiểm tra đường truyền sau đó thử lại!");
                                        }, () => {
                                            this.setState({
                                                uploadState: "uploaded"
                                            })
                                            alert("Bài viết đã được đăng lên tường!");
                                            window.location.reload();
                                        })
                                }
                            }
                        })
                        .catch((err) => {
                            console.log("Error adding post id to user data: id", doc.id, err);
                        })
                }).catch((err) => {
                    console.log("Error getting user data: ", err);
                })
        }).catch((err) => {
            console.log("Errors adding data: ", err);
        })

    }
    clearAllUploadFiles() {
        this.setState({
            thumbnailsImage: [],
            thumbnailsVideo: [],
            filesUpload: []
        })
    }
    render() {
        return (
            <>
                {this.state.uploadState === "uploading" ? <LoaderSpinner progressbar={true} percentage={this.state.fileTransferProgress} /> : <></>}
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
                        <span className="text-secondary font-weight-bold">New Post</span>
                    </div>
                    <textarea
                        className="post-content px-2 py-2 mb-4 bg-white"
                        placeholder="Điều bạn muốn nói ..."
                        onChange={this.handlePostContentInput}>
                    </textarea>
                    <div className="attachment-list d-flex justify-content-start align-items-start">
                        <Form.File
                            className="attachment-button font-weight-bold mr-3">
                            <FormFile.Label className="attachment-label mb-0 px-3 py-2 bg-light" htmlFor="imageUoload">
                                <FontAwesomeIcon className="attachment-icon mr-3" icon={faImages} size="lg" /> Ảnh
                            </FormFile.Label>
                            <FormFile.Input accept="image/*" multiple className="attachment-input" id="imageUoload" onChange={this.handleChangeThumbnailImage} />
                        </Form.File>
                        <Form.File
                            className="attachment-button font-weight-bold mr-3">
                            <FormFile.Label className="attachment-label mb-0 px-3 py-2 bg-light" htmlFor="videoUpload">
                                <FontAwesomeIcon className="attachment-icon mr-3" icon={faFilm} size="lg" /> Video
                            </FormFile.Label>
                            <FormFile.Input accept="video/*" multiple className="attachment-input" id="videoUpload" onChange={this.handleChangeThumbnailVideo} />
                        </Form.File>
                    </div>
                    <Row className="thumbnail-list mx-0 mt-3 justify-content-start align-items-center position-relative">
                        {
                            (this.state.filesUpload.length !== 0) ?
                                this.state.filesUpload.map((thumbnail, i) => {
                                    if (i < 3) return (
                                        <Col xs={4} className="thumbnail-item text-center" key={i}>
                                            {
                                                thumbnail.type.startsWith("image/") ?
                                                    <Image className="image" src={URL.createObjectURL(thumbnail)} thumbnail rounded />
                                                    :
                                                    <>
                                                        <VideoThumbnail videoUrl={URL.createObjectURL(thumbnail)} />
                                                        <div className="video-thumbnail-cover">
                                                            <FontAwesomeIcon icon={faPlayCircle} size="lg" />
                                                        </div>
                                                    </>
                                            }
                                        </Col>
                                    )
                                }) :
                                <></>
                        }
                        {
                            this.state.thumbnailsImage.length + this.state.thumbnailsVideo.length > 3 ?
                                <Col xs={4} className="thumbnail-item-exceed text-center">
                                    {"+" + (this.state.thumbnailsImage.length + this.state.thumbnailsVideo.length - 3)}
                                </Col> :
                                <></>
                        }
                        <Button
                            className={"clear-files-button " + (this.state.thumbnailsImage.length !== 0 || this.state.thumbnailsVideo.length !== 0 ? "" : "d-none")}
                            variant="secondary"
                            onClick={this.clearAllUploadFiles}>
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </Button>
                    </Row>
                    <Button variant="success"
                        disabled={(this.state.filesUpload.length !== 0) || (this.state.postContent !== "") ? false : true}
                        className="post-button font-weight-bold px-5 py-2" onClick={this.handleUploadFiles}>
                        Đăng bài
                    </Button>
                </Jumbotron>
                <div className={this.state.isOpened ? "page-blur-cover" : ""}></div>
            </>
        );
    }
}


export default NewPost;