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
import BlogSingle from "./routes/BlogSingle"
import BlogSingleStandard from "./routes/blogSingleStandard"
import Privacy from "./routes/Privacy"
import OurStory from "./routes/OurStory"
import Error from "./routes/error"

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
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/blogSingle",
          element: <BlogSingle></BlogSingle>
        },
        {
          path: "/blogSingleStandard",
          element: <BlogSingleStandard></BlogSingleStandard>
        },
        {
          path: "/privacy",
          element: <Privacy></Privacy>
        },
        {
          path: "/ourStory",
          element: <OurStory></OurStory>
        },
        {
          path: "/error",
          element: <Error></Error>
        }
      ]
    }
  ])

  export default router