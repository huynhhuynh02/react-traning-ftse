import React from 'react';

import PostItem from "./../PostItem";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: this.props.postList.reverse()
        }
    }
    render() {
        return (
            <div className="post-list">
                {this.state.postList.map((postId, i) => <PostItem postdata={postId} key={i} />)}
            </div>
        )
    }
}