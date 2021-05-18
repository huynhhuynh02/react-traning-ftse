import React from 'react';

import SuggestFriend from "./../SuggestFriend";
import "./../../../styles/friends/SuggestList.css";

export default class SuggestList extends React.Component {
    render() {
        return (
            <div className="suggest-list w-100">
                <SuggestFriend top="0" height="auto" displayAmount={10} />
            </div>
        );
    }
}