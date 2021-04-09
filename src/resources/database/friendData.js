import avatar from "./../images/avatar.jpeg";
import ID from "./../functions/ID";

let id1 = ID();

let friendList = [
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: true

    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: true
    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: false
    },
    {
        id: id1,
        username: "Friend Test",
        avatar: avatar,
        info: "Some infos",
        isOnline: false
    }
];

export default friendList;