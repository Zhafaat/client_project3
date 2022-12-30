import './Coupon.css'

export default function Coupon(props) {
    return(
        <div className="cart-applyCoupon-container" style={{width: props.width}}>
            <input className='cartCouponCode body-small' type="text" placeholder='Coupon Code'/>
            <button className='cartCouponButton body-large'>APPLY COUPON</button>
        </div>
    )
}