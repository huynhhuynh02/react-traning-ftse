import MusicID from "../components/PlayMusic/MusicID";
import History from "../containers/History";
import Albums from "../containers/Albums";
import HomePage from "../containers/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component:HomePage
    },
    {
        path: "/about",
        component: History
    },
    {
        path: "/contact",
        component: Albums
    },
    {
        path: "/getId",
        component: MusicID
    }
];
export default routes;