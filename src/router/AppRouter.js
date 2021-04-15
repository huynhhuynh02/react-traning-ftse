import SignupPage from "../containers/SignupPage";
import LoginPage from "../containers/LoginPage";
import MessagePage from "../containers/MessagePage";
import FriendPage from "../containers/FriendPage";
import HomePage from "../containers/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/message",
        component: MessagePage
    },
    {
        path: "/friend",
        component: FriendPage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/register",
        component: SignupPage
    }
];
export default routes;