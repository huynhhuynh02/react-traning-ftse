import avatar from "./../images/avatar.png";
import generateId from "../functions/generateId";

let id1 = generateId();

let userData = {
    id: id1,
    username: "User Test",
    avatar: avatar,
    info: "Some infos want to share"
};

export default userData;