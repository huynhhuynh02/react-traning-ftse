import MessagePage from "../containers/MessagePage";
import FriendPage from "../containers/FriendPage";
import HomePage from "../containers/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component:HomePage
    },
    {
        path: "/message",
        component: MessagePage
    },
    {
        path: "/friend",
        component: FriendPage
    }
];
export default routes;