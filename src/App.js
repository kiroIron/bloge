import React from 'react'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SinglePage from './pages/SinglePage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Content from './pages/Content';
import AppNavbar from './components/AppNavbar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/content",
    element: <Content/>,
  },
  {
    path: "/about",
    element: <About/>,
  },

  {
    path: "/single-page",
    element: <SinglePage/>,
  },
]);

const App = () => {
  
  return (
    <>
  <AppNavbar />
  <RouterProvider router={router} />
  <Footer />
    </>
  )
}

export default App