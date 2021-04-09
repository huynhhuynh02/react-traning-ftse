import LoginPage from "../containers/Auth/LoginPage";
import RegisterPage from "../containers/Auth/RegisterPage";
import HomePage from "../containers/HomePage";


const routes = [
    {
        path: "/",
        exact: true,
        component:LoginPage
    },
    {
        path: "/register",
        exact: true,
        component:RegisterPage
    },
    {
        path: "/home",
        exact: true,
        component:HomePage
    }
   
];
export default routes;