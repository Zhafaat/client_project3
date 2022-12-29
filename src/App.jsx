import './App.css'
import {Outlet}  from "react-router-dom"
import Footer from './components/Footer'
import Head from './components/Head'
import ShoppingBag from './components/ShoppingBag'


function App() {
  return (
    <div className="App">
      {/* <ShoppingBag></ShoppingBag> */}
      <Head />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
