import SignupPage from "../containers/SignupPage";
import LoginPage from "../containers/LoginPage";
import MessagePage from "../containers/MessagePage";
import FriendPage from "../containers/FriendPage";
import HomePage from "../containers/HomePage";
import ProfilePage from "../containers/ProfilePage";

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
        path: "/user",
        component: ProfilePage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/signup",
        component: SignupPage
    }
];
export default routes;