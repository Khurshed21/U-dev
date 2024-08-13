import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";




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
