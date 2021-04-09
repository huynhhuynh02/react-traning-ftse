import avatar from "./../images/avatar.jpeg";
import ID from "./../functions/ID";

let id1 = ID() ; 
let id2 = ID() ;

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