import {useState, useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Numeros from "./pages/Numeros";
import Contact from "./pages/Contact";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import FooterMobile from "./components/FooterMobile";
import FooterDesktop from "./components/FooterDesktop";

const Layout = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])

  return  (
    <>
      {screenWidth < 800 ? <NavbarMobile/> : <NavbarDesktop/>}
      <Outlet/>
      {screenWidth < 800 ? <FooterMobile/> : <FooterDesktop/>}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },    
      {
        path: "/article/:id",
        element: <Article/>,
      },    
      {
        path: "/numeros",
        element: <Numeros/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/articles",
        element: <Articles/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />        
    </div>
  );
}
export default App;
