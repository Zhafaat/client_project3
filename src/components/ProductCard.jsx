import earrings from '../assets/HOME02.svg'
import cart from '../assets/shopcart.svg'
import eye from '../assets/see.svg'
import love from '../assets/love.svg'
import './ProductCard.css'

import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <div className="productCard">
            <div className="product-image">
                <img src={earrings} alt="earrings" />
                <div className="product-image-navbar">
                    <Link><img src={cart} alt="cart" /></Link>
                    <Link><img src={eye} alt="eye" /></Link>
                    <img src={love} alt="love" />
                </div>
                <button>ADD TO CART</button>
            </div>
            <div className="product-content">
                <p>Lira Earrings</p>
                <p>$ 20,00</p>
            </div>
        </div>
    )
}