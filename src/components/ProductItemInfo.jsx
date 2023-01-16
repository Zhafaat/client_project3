import './ProductItemInfo.css'

import images from '../assets/productImages.svg'
import image from '../assets/productImage.svg'
import like from '../assets/love.svg'
import email from '../assets/email.svg'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import twitter from '../assets/tw.svg'
import { Link, Outlet } from 'react-router-dom'

import ReviewStars from './ReviewStars'

import {useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function ProductItemInfo() {

    let {productId} = useParams();
    // console.log(productId)

    const [Product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`http://localhost:3000/product/${productId}`)
            setProduct(request.data)
        }

        fetchData()
    }, [])

    
    if(Product){
        // console.log(Product[0])
        return (
            <div className="productItemInfo">
                <div className="productItemInfo-top">
                    <div className="productItemInfo-images-container">
                        <img className='productItemInfo-images' src={Product[0].imageURL} alt="earrings" />
                        <img className='productItemInfo-images' src={Product[0].imageURL} alt="earrings" />
                        <img className='productItemInfo-images' src={Product[0].imageURL} alt="earrings" />
                        <img className='productItemInfo-images' src={Product[0].imageURL} alt="earrings" />
                    </div>
                    <img className='productItemInfo-image' src={Product[0].imageURL} alt="earrings" />
                    <div className="productItemInfo-detail">
                        {/* jika menggunakan flexbox container detail harus di bagi tiga anatar name & price, review & cart button, dan sosmed link & jumlah item, kategories. */}
                        <div className="productItemInfo-namePrice-container">
                            <p className='heading-2'>{Product[0].name}</p>
                            <p className='heading-4 productItemInfo-price'>$ {Product[0].price}</p>
                        </div>
                        <div className="productItemInfo-reviewCart-container">
                            <div className="productItemInfo-review">
                                <div className="review-starsCustomer-container">
                                    <ReviewStars />
                                    <p className='review-customer heading-5'>1 customer review</p>
                                </div>
                                <p className='review heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                            </div>
                            <div className="productItemInfo-cart">
                                <div className="cart-inputQuantity">
                                    <button className='quantityButton heading-5'>-</button>
                                    <p className='heading-5'>1</p>
                                    <button className='quantityButton heading-5'>+</button>
                                </div>
                                <button className='cartButton'>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="productItemInfo-sosmedskuCategories-container">
                            <div className="productItemInfo-sosmed">
                                <img className='productItemInfo-like' src={like} alt="like" />
                                <div className="sosmed-container">
                                    <img className='sosmedEmail' src={email} alt="Email" />
                                    <img className='sosmedFb' src={fb} alt="Fb" />
                                    <img className='sosmedIg' src={ig} alt="Ig" />
                                    <img className='sosmedTwitter' src={twitter} alt="Twitter" />
                                </div>
                            </div>
                            <div className="productItemInfo-skuCategories">
                                <div className="sku-container">
                                    <p className='productItemInfo-skuCategories-name heading-5'>SKU:</p>
                                    <p className='productItemInfo-skuCategories-value heading-5'>{Product[0].stock}</p>
                                </div>
                                <div className="categories-container">
                                    <p className='productItemInfo-skuCategories-name heading-5'>Categories:</p>
                                    <p className='productItemInfo-skuCategories-value heading-5'>Fashion, Style</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productItemInfo-bottom">
                    <div className="productItemInfo-navbar">
                        <Link className='link heading-3' to={`/product/${productId}`}>Description</Link>
                        <Link className='link heading-3' to={`/product/${productId}/aditionalInformation`}>Aditional information</Link>
                        <Link className='link heading-3' to={`/product/${productId}/reviews`}>Reviews({Product[0].reviews.length})</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        )

    } else {
        return (
            <h1>Loading</h1>
        )
    }

}