import generateId from "../functions/generateId";
import avatarDemo from "./../../resources/images/avatar.jpg";

let id1 = generateId();
let id2 = generateId();

let messageList = [
    {
        id: id1,
        type: "invidual",
        avatar: avatarDemo,
        member: [
            {
                userId: id1,
                avatar: avatarDemo,
                username: "User Chat Test",
            },
            {
                userId: id1,
                avatar: avatarDemo,
                username: "User Chat Test"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                sender: "owner",
                content: "Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id2,
                sender: "friend",
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id2,
                sender: "friend",
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id2,
                sender: "friend",
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    },
    {
        id: id1,
        type: "invidual",
        avatar: avatarDemo,
        member: [
            {
                userId: id1,
                avatar: avatarDemo,
                username: "User Chat Sample"
            },
            {
                userId: id1,
                avatar: avatarDemo,
                username: "User Chat Sample"
            }
        ],
        chatList: [
            {
                ownerId: id1,
                sender: "owner",
                content: "Sample Text",
                timeSent: "5 phút trước"
            },
            {
                ownerId: id2,
                sender: "friend",
                content: "Sample Text",
                timeSent: "5 phút trước"
            }
        ]
    }
];

export default messageList;