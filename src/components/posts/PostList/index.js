import React from 'react';

import PostItem from "./../PostItem";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postIdList: this.props.postList
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.postList !== this.props.postList) {
            this.setState({ postIdList: this.props.postList });
        }
    }
    render() {
        return (
            <div className="post-list">
                {this.state.postIdList.map((postId, i) => <PostItem postdata={postId} key={i} />)}
            </div>
        )
    }
}