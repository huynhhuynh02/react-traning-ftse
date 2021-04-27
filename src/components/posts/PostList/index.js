import React from 'react';

import PostItem from "./../PostItem";

export default function PostList(props) {
    console.log(props.postList);
    return (
        <div className="post-list">
            {props.postList.map((post, i) => {
                return (
                    <PostItem postdata={post} key={i} />
                )
            })}
        </div>
    );
}