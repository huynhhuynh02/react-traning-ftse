import avatarDemo from "./../images/avatar.jpg";
import generateId from "../functions/generateId";

let id1 = generateId() ; 
let id2 = generateId() ;

let shortcutList = [
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatarDemo
        }
    },
    {
        id: id2,
        shortcutInfo: {
            type: "Page",
            id: id1,
            name: "Page Test",
            avatar: avatarDemo
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatarDemo
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatarDemo
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatarDemo
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatarDemo
        }
    }
];

export default shortcutList;