import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Mobile from "./pages/Mobile/Mobile";
import MobileCase from "./pages/MobileCase/MobileCase";
import Contact from "./pages/Contact/Contact";




function App(){

  const router = createBrowserRouter([
   
    {
      path: "/",
      element: (
        
          <Layout />
      
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/Services',
          element: <Services />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Mobile',
          element: <Mobile />,
        },
        {
          path: '/MobileCase',
          element: <MobileCase />,
        },

      ],
    },
  ])

  return (
    <>
    <RouterProvider  router={router}></RouterProvider>
    </>
  )
}

export default App
