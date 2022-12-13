import cart from '../assets/shopcart.svg'
import eye from '../assets/EYE2.svg'
import love from '../assets/love.svg'
import './ProductCard.css'

import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <div className="productCard" style={{height: props.heightCard}}>
            <div className="product-image-container">
                <img className='product-image' style={{width: props.widthImage, height: props.heightImage}} src={props.image} alt="earrings" />
                <div className="product-image-navbar">
                    <Link><img className='product-cart' src={cart} alt="cart" /></Link>
                    <Link><img className='product-see' src={eye} alt="eye" /></Link>
                    <img className='product-like' src={love} alt="love" />
                </div>
                <button className='product-button body-large' style={{width: props.widthImage}}>ADD TO CART</button>
            </div>
            <div className="product-content">
                <p className='heading-3'>Lira Earrings</p>
                <p className='product-content-price heading-4'>$ 20,00</p>
            </div>
        </div>
    )
}