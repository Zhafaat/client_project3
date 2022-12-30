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
import Account from "./routes/account"
import AccountDashboard from "./routes/AccountDashboard"
import AccountOrders from "./routes/AccountOrders"
import AccountDownloads from "./routes/AccountDownloads"
import AccountAddresses from "./routes/AccountAddresses"
import AccountDetails from "./routes/AccountDetails"
import ViewOrder from "./routes/ViewOrder"
import Cart from "./routes/Cart"
import Checkout from "./routes/Checkout"

const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children : [
        {
            path: "/home",
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
          path: '/',
          element: <MyAccount />,
          children: [
            {
              path: "/",
              element: <SignIn />
            },
            {
              path: "/register",
              element: <Register />
            }
          ]
        },
        {
          path: "/account",
          element: <Account></Account>,
          children: [
            {
              path: "/account/dashboard",
              element: <AccountDashboard></AccountDashboard>
            },
            {
              path: "/account/orders",
              element: <AccountOrders></AccountOrders>
            },
            {
              path: "/account/downloads",
              element: <AccountDownloads></AccountDownloads>
            },
            {
              path: "/account/addresses",
              element: <AccountAddresses></AccountAddresses>
            },
            {
              path: "/account/details",
              element: <AccountDetails></AccountDetails>
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
        },
        {
          path: "/viewOrder",
          element: <ViewOrder></ViewOrder>
        },
        {
          path: "/cart",
          element: <Cart></Cart>
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>
        }
      ]
    }
  ])

  export default router