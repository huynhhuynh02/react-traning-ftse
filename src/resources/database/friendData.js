import avatar from "./../images/avatar.png";
import generateId from "../functions/generateId";

let id1 = generateId();

let friendList = [
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: true,
        mutualFriend: 4
    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: true,
        mutualFriend: 3
    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: false,
        mutualFriend: 2
    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: false,
        mutualFriend: 8
    }
];

export default friendList;