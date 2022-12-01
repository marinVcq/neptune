import React, {useState, useEffect, Suspense} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register"
import Write from "./pages/Write";
import Add from "./pages/Add";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Numeros from "./pages/Numeros";
import Contact from "./pages/Contact";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import FooterMobile from "./components/FooterMobile";
import FooterDesktop from "./components/FooterDesktop";
import Charte from "./pages/Charte";
import ScrollToTop from './components/ScrollToTop';


const Home = React.lazy(() => import('./pages/Home'));

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
      <Suspense>
        <ScrollToTop/>
        <Outlet/>
      </Suspense>
      {screenWidth < 800 ? <FooterMobile/> : <FooterDesktop/>}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
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
        path: "/charte",
        element: <Charte/>,
      } 
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
        path: "/write",
        element: <Write/>,
  },
  {
        path: "/add",
        element: <Add/>,
  },
]);

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />        
    </div>
  );
}
export default App;
