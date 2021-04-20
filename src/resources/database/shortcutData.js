import avatar from "./../images/avatar.png";
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
            avatar: avatar
        }
    },
    {
        id: id2,
        shortcutInfo: {
            type: "Page",
            id: id1,
            name: "Page Test",
            avatar: avatar
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatar
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatar
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatar
        }
    },
    {
        id: id1,
        shortcutInfo: {
            type: "Group",
            id: id1,
            name: "Group Test",
            avatar: avatar
        }
    }
];

export default shortcutList;