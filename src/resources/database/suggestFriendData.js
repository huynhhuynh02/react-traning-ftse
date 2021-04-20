import avatar from "./../images/avatar.png";
import generateId from "../functions/generateId";

let id1 = generateId();
let id2 = generateId();

let suggestFriendList = [
    {
        id: id1,
        username: "User Test 1",
        avatar: avatar,
        info: "Some sample info 1",
        mutualFriend: 3
    },
    {
        id: id2,
        username: "User Test 2",
        avatar: avatar,
        info: "Some sample info 2",
        mutualFriend: 2
    }
];

export default suggestFriendList;