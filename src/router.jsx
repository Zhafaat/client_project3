import {
    createBrowserRouter
} from "react-router-dom"
import Blog from "./routes/Blog"
import Shop from "./routes/Shop"
import App from "./App"
import Home from "./routes/Home"    
import Product from "./routes/Product"
import Description from "./routes/Description"
import AditionalInformation from "./routes/AditionalInformation"
import Reviews from "./routes/Reviews"
import Contact from "./routes/Contact"
import SignIn from "./routes/SignIn"

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
            path: "/shop",
            element: <Shop />
        }, 
        {
            path: "/product",
            element: <Product />,
            children: [
              {
                path: "/product",
                element: <Description />
              },
              {
                path: "/product/aditionalInformation",
                element: <AditionalInformation />
              },
              {
                path: "/product/reviews",
                element: <Reviews />
              }
            ]
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact />,
          children: [
            {
              path: "/contact",
              element: <SignIn />
            }
          ]
        }
      ]
    },
    // {
    //     path: "/Shop",
    //     element: <Shop />
    // }
  ])

  export default router