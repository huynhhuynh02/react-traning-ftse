import avatar from "./../images/avatar.jpeg";
import ID from "./../functions/ID";

let id1 = ID();
let id2 = ID();

let messageList = [
    {
        id: id1,
        type: "invidual",
        avatar: avatar,
        member: [
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            },
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                content: "Sample Text Sample Text Sample Text Sample Text Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id2,
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    },
    {
        id: id1,
        type: "invidual",
        avatar: avatar,
        member: [
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Sample"
            },
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Sample"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    },
    {
        id: id1,
        type: "invidual",
        avatar: avatar,
        member: [
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            },
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    },
    {
        id: id1,
        type: "group",
        avatar: avatar,
        member: [
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            },
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            },
            {
                userId: id1,
                avatar: avatar,
                username: "User Chat Test"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id1,
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    }
];

export default messageList;