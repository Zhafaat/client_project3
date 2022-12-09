import './App.css'
import {Outlet}  from "react-router-dom"
import Footer from './components/Footer'
import Head from './components/Head'


function App() {
  return (
    <div className="App">
      <Head />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
