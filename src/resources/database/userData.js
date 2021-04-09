import avatar from "./../images/avatar.jpeg";
import ID from "./../functions/ID";

let id1 = ID();

let userData = {
    id: id1,
    username: "User Test",
    avatar: avatar,
    info: "Some infos"
};

export default userData;