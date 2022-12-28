import './Cart.css'

import cross from '../assets/cross.svg'
import item from '../assets/shoppingbag01.svg'


export default function Cart() {
    function CartItem() {
        return(
            <div className="cartItem">
                <div className="cartItem-body">
                    <img className='cartItemImage' src={item} alt="Item" />
                    <div className="cartItem-info">
                        <div className="cartItem-info-namePrice">
                            <p className='heading-3'>Item Name</p>
                            <div className="cartItem-info-price">
                                <p className='heading-5' style={{color: "#707070"}}>color / size</p>
                                <p className='heading-5' style={{color: "#A18A68"}}>prize</p>
                            </div>
                        </div>
                        <div className="cart-inputQuantity">
                            <button className='quantityButton heading-5'>-</button>
                            <p className='heading-5'>3</p>
                            <button className='quantityButton heading-5'>+</button>
                        </div>
                    </div>
                </div>
                <button className='cartItemButton'><img className='cartItemCross' src={cross} alt="cross" /></button>
            </div>
        )
    }

    function CartTotals() {
        return(
            <div className="cartTotals">
                <div className="cartTotals-container">
                    <p className='heading-2' style={{lineHeight: "25px"}}>Cart totals</p>
                    <div className="cartTotals-list">
                        <div className="cartTotals-list-container">
                            <div className="cartTotals-subtotal">
                                <p className='heading-5'>SUBTOTAL</p>
                                <p className='heading-5' style={{color: "#707070"}}>$ 65,00</p>
                            </div>
                            <div className="cartTotals-shipping">
                                <p className='heading-5'>SHIPPING</p>
                                <p className='heading-5' style={{color: "#707070", width: "250px"}}>Shipping costs will be calculated once you have provided address.</p>
                            </div>
                            <div className="cartTotals-calculateShipping">
                                <p className='heading-5'>CALCULATE SHIPPING</p>
                                <div className="cartTotals-calculateShipping-list">
                                    <div className="cartTotals-calculateShipping-location">
                                        <p className='body-small' style={{color: "#707070"}}>SELECT A COUNTRY</p>
                                    </div>
                                    <div className="cartTotals-calculateShipping-location">
                                        <p className='body-small' style={{color: "#707070"}}>CITY</p>
                                    </div>
                                    <div className="cartTotals-calculateShipping-location">
                                        <p className='body-small' style={{color: "#707070"}}>POST CODE / ZIP</p>
                                    </div>
                                </div>
                                <button className='body-large cartTotalsShippingButton'>UPDATE TOTALS</button>
                            </div>
                        </div>
                        <div className="cartTotals-totalPrice">
                            <p className='body-large'>TOTAL</p>
                            <p className='body-large'>$ 87,00</p>
                        </div>
                    </div>
                </div>
                <button className='body-large cartTotalsButton'>PROCEED TO CHECKOUT</button>
            </div>
        )
    }
    
    return (
        <div className="cart">
            <p className='heading-1' style={{marginBottom: "64px"}}>Shopping Cart</p>
            <div className="cart-body">
                <div className="cart-body-left">
                    <div className="cart-item-list">
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <button className='cartUpdateButton body-large'>UPDATE CART</button>
                    </div>
                    <div className="cart-applyCoupon-container">
                        <input className='cartCouponCode body-small' type="text" placeholder='Coupon Code'/>
                        <button className='cartCouponButton body-large'>APPLY COUPON</button>
                    </div>
                </div>
                <div className="cart-body-right">
                    <CartTotals></CartTotals>
                </div>
            </div>
        </div>
    )
}