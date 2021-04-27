import SignupPage from "../containers/SignupPage";
import LoginPage from "../containers/LoginPage";
import MessagePage from "../containers/MessagePage";
import FriendPage from "../containers/FriendPage";
import HomePage from "../containers/HomePage";
import ProfilePage from "../containers/ProfilePage";

import PostList from "./../components/posts/PostList";
import LibraryList from "../components/users/LibraryList";
import BuddyList from "./../components/users/BuddyList";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/message",
        exact: true,
        component: MessagePage
    },
    {
        path: "/friend",
        exact: true,
        component: FriendPage
    },
    {
        path: "/profile",
        component: ProfilePage,
        routes: [
            {
                path: "/profile/post",
                component: PostList,
                label: "Bài viết",
                exact: true
            },
            {
                path: "/profile/buddy",
                component: BuddyList,
                label: "Bạn bè",
                exact: true
            },
            {
                path: "/profile/library",
                component: LibraryList,
                label: "Thư viện",
                exact: true
            }
        ]
    },
    {
        path: "/login",
        exact: true,
        component: LoginPage
    },
    {
        path: "/signup",
        exact: true,
        component: SignupPage
    }
];
export default routes;