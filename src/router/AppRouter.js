import AboutPage from "../containers/AboutPage";
import ContactPage from "../containers/ContactPage";
import Information from '../components/Information';
import Home from "../components/Home";
import Pay from '../components/Pay';
const routes = [
    {
        path: "/home",
        component:Home
    },
    {
        path: "/pay",
        exact:false,
        component:Pay
    }
];
export default routes;