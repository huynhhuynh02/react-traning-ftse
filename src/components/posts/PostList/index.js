import React from 'react';

import PostItem from "./../PostItem";

export default class PostList extends React.Component {
    render() {
        this.props.postList.reverse();
        return (
            <div className="post-list">
                {this.props.postList.map((postId, i) => <PostItem postdata={postId} key={i} />)}
            </div>
        )
    }
}