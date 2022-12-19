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
import MyAccount from "./routes/MyAccount"
import SignIn from "./routes/SignIn"
import Register from "./routes/Register"
import Contact from "./routes/Contact"
import ResetPassword from "./routes/ResetPassword"

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
          path: '/myAccount',
          element: <MyAccount />,
          children: [
            {
              path: "/myAccount",
              element: <SignIn />
            },
            {
              path: "/myAccount/register",
              element: <Register />
            }
          ]
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/resetPassword",
          element: <ResetPassword />
        }
      ]
    }
  ])

  export default router