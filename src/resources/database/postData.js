import avatar from "./../images/avatar.png";
import thumbnail from "./../images/thumbnail.jpeg";
import generateId from "../functions/generateId";

let id1 = generateId() ; 
let id2 = generateId() ;
let postList = [
    {
        id: id1,
        isLike: true,
        user: {
            id: id1,
            username: "User 1",
            avatar: avatar
        },
        createdAt: " 05:45 Hôm nay",
        textContent: "Content Sample",
        thumbnails: {
            images: [
                thumbnail,
                avatar,
                avatar
            ]
        },
        infoAmount: {
            likes: 1,
            comments: 2,
            shares: 3
        },
        comments: [
            {
                id: id2,
                user: {
                    id: id2,
                    username: "User comment",
                    avatar: avatar,
                    content: "Comment Sample Longer Comment Sample Longer"
                },
                dateCmt: "12:00 Hôm qua",
                reply: []
            },
            {
                id: id2,
                user: {
                    id: id2,
                    username: "User comment",
                    avatar: avatar,
                    content: "Comment Sample"
                },
                dateCmt: "12:00 Hôm nay",
                reply: []
            }
        ]
    },
    {
        id: id2,
        isLike: false,
        user: {
            id: id2,
            username: "User 2",
            avatar: avatar
        },
        createdAt: "12:45 12/02/2021",
        textContent: "Content Sample",
        thumbnails: {
            images: [
                thumbnail
            ]
        },
        infoAmount: {
            likes: 1,
            comments: 2,
            shares: 3
        },
        comments: [
            {
                id: id2,
                user: {
                    id: id2,
                    username: "User comment",
                    avatar: avatar,
                    content: "Comment Sample"
                },
                dateCmt: "12:00 Hôm qua",
                reply: [
                    {
                        id: id2,
                        user: {
                            id: id2,
                            username: "User reply",
                            avatar: avatar
                        },
                        content: "Reply Sample",
                        dateRep: "02:34 Hôm qua"
                    }
                ]
            }
        ]
    }
];

export default postList;