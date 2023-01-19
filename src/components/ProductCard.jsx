import cart from '../assets/shopcart.svg'
import eye from '../assets/EYE2.svg'
import love from '../assets/love.svg'
import './ProductCard.css'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function ProductCard(props) {
    const navigate = useNavigate()

    // const [Account, setAccount] = useState('')
    // const [Product, setProduct] = useState('')
    const account = localStorage.getItem('account_id');
    const access_token = localStorage.getItem('access_token')

    const addCart = async (event) => {
        
        const body = {
            'account_id': account,
            'product_id': props.id
        }
        console.log(body)
        try {
            const request = await axios.post('http://localhost:3000/cart', body, {
                headers: {
                    'access_token': access_token
                }
            })
            console.log(request.data.message, "<<< result")
        } catch (error) {
            console.log(error.response.data.message, "<<< error")
            alert(error.response.data.message)
            navigate("/")

        }
    }



    return (
        <div className="productCard" style={{height: props.heightCard, marginBottom: props.marginBottom}}>
            <div className="product-image-container">
                <img className='product-image' style={{width: props.widthImage, height: props.heightImage}} src={props.image} alt="earrings" />
                <div className="product-image-navbar">
                    <Link><img className='product-cart' src={cart} alt="cart" /></Link>
                    <Link to={`/product/${props.id}`}><img className='product-see' src={eye} alt="eye" /></Link>
                    <img className='product-like' src={love} alt="love" />
                </div>
                <button className='product-button body-large' style={{width: props.widthImage}} onClick={addCart} >ADD TO CART</button>
            </div>
            <div className="product-content">
                <p className='heading-3'>{props.name}</p>
                <p className='product-content-price heading-4'>$ {props.price}</p>
            </div>
        </div>
    )
}