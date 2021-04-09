import React from 'react';

import PostItem from "./../PostItem";

import postList from "../../../resources/database/postData"
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList
        }
    }
    render() {
        return (
            <div className="post-list">
                {this.state.postList.map((post, i) => {
                    return (
                        <PostItem postdata={post} key={i} />
                    )
                })}
            </div>
        );
    }
}


export default PostList;