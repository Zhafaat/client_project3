import { Link } from "react-router-dom"
import search from '../assets/search.svg'
import cart from '../assets/shopcart.svg'
import account from '../assets/account.svg'
import './Head.css'

function Head() {
    return (
        <div className="head">
            <p style={{margin: 0}}><Link className="shoppe link" to={'/'}>S<span style={{color: '#000'}}>HOPPE</span> </Link></p>
            <div className="head-navbar">
                <div className="navbar-left">
                    <Link className="link heading-5" to={'/shop'}>Shop</Link>
                    <Link className="link heading-5" to={'/blog'}>Blog</Link>
                    <Link className="link heading-5" to={'/ourStory'}>Our Story</Link>
                </div>
                <div className="navbar-right">
                    <Link to={"/blogSingleStandard"}><img className="search" src={search} alt="search" /></Link>
                    <Link><img className="cart" src={cart} alt="cart" /></Link>
                    <Link to={"/myAccount"}><img className="account" src={account} alt="account" /></Link>

                </div>
            </div>
        </div>
    )
}

export default Head