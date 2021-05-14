
import Home from "./containers/Home";
import Lyrics from "./containers/Lyrics";
import Topchart from "./containers/TopChart";
import Album from "./containers/Album";
import Minialbum from "./containers/Minialbum";
import Nearby from "./containers/Nearby";
const routes = [
    {
      path: "/",
      exact: true,
      component: Album
    },
    {
      path: "/topchart",
      component: Topchart
    },
    {
      path:"/album",
      component: Album
    },
    {
      path:"/lyrics",
      component: Lyrics
    },
    {
      path:"/albums/:id",
      component: Minialbum
    },
    {
      path:"/nearby",
      component: Nearby
    }
  ];
export default routes;