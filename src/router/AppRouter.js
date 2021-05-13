import SignupPage from "./../containers/SignupPage";
import LoginPage from "./../containers/LoginPage";
import MessagePage from "./../containers/MessagePage";
import FriendPage from "./../containers/FriendPage";
import HomePage from "./../containers/HomePage";
import ProfilePage from "./../containers/ProfilePage";
import UserPage from "./../containers/UserPage";
import PostPage from "./../containers/PostPage";

import PostList from "./../components/posts/PostList";
import LibraryList from "./../components/users/LibraryList";
import BuddyList from "./../components/users/BuddyList";
import FriendList from "./../components/friends/FriendList";
import InviteList from "./../components/friends/InviteList";
import SuggestList from "./../components/friends/SuggestList";

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
        component: FriendPage,
        tabs: [
            {
                component: <FriendList />,
                label: "Tất cả bạn bè"
            },
            {
                component: <InviteList />,
                label: "Lời mời kết bạn"
            },
            {
                component: <SuggestList />,
                label: "Gợi ý kết bạn"
            }
        ]
    },
    {
        path: "/profile",
        component: ProfilePage,
        routes: [
            {
                path: "",
                component: PostList,
                label: "Bài viết",
                exact: true
            },
            {
                path: "/buddy",
                component: BuddyList,
                label: "Bạn bè",
                exact: true
            },
            {
                path: "/library",
                component: LibraryList,
                label: "Thư viện",
                exact: true
            }
        ]
    },
    {
        path: "/user",
        component: UserPage,
        routes: [
            {
                path: "",
                component: PostList,
                label: "Bài viết",
                exact: true
            },
            {
                path: "/buddy",
                component: BuddyList,
                label: "Bạn bè",
                exact: true
            },
            {
                path: "/library",
                component: LibraryList,
                label: "Thư viện",
                exact: true
            }
        ]
    },
    {
        path: "/post",
        component: PostPage
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