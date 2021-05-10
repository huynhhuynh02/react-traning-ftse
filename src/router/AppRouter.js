import GetId from "../components/PlayMusic/getId";
import AboutPage from "../containers/AboutPage";
import ContactPage from "../containers/ContactPage";
import HomePage from "../containers/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component:HomePage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/contact",
        component: ContactPage
    },
    {
        path: "/getId",
        component: GetId
    }
];
export default routes;