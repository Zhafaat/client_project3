import {
    createBrowserRouter
} from "react-router-dom"
import Blog from "./routes/Blog"
import Shop from "./routes/Shop"
import App from "./App"
import Home from "./routes/Home"    


const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/Shop",
            element: <Shop />
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        }
      ]
    },
    // {
    //     path: "/Shop",
    //     element: <Shop />
    // }
  ])

  export default router