import './Checkout.css'

import { Link } from 'react-router-dom';
import BillList from "../components/BillList";
import Coupon from "../components/Coupon";

export default function Checkout(){
    return(
        <div className="checkout flex-column">
            <div className="checkout-head flex-column">
                <p className='heading-1' style={{alignSelf: "center"}}>Checkout</p>
                <div className="checkout-head-content flex-column">
                    <div className="checkout-head-text flex-column">
                        <p className='heading-5' style={{color: "#707070"}}>Returning customer? <Link className='link'>Click here to login</Link></p>
                        <p className='heading-5' style={{color: "#707070"}}>Have a coupon? <Link className='link'>Click here to enter your code</Link></p>
                    </div>
                    <div className="checkout-head-coupon flex-column">
                        <p className='heading-5' style={{color: "#707070"}}>If you have a coupon code, please apply it below.</p>
                        <Coupon width="532px"></Coupon>
                    </div>
                </div>

            </div>
            <div className="checkout-body flex-row">
                <div className="checkout-billingDetails flex-column">
                    <p className='heading-2'>Billing Details</p>
                    <form action="#" className="checkout-billingDetails-form flex-column">
                        <div className="checkout-formName-container flex-row">
                            <input type="text" placeholder="First name *"/>
                            <input type="text" placeholder="last name *"/>
                        </div>
                        <input type="text" placeholder="Company Name *"/>
                        <input type="text" placeholder="Country *"/>
                        <input type="text" placeholder="Street Address *"/>
                        <input type="text" placeholder="Postcode / ZIP *"/>
                        <input type="text" placeholder="Town / City *"/>
                        <input type="text" placeholder="Phone *"/>
                        <input type="text" placeholder="Email *"/>
                        <div className="checkout-formCheckbox-container flex-column">
                            <div>
                                <input type="checkbox" name="creatAccount" id="creatAccount" />
                                <label htmlFor="creatAccount" className='heading-5'>Create an account?</label>
                            </div>
                            <div>
                                <input type="checkbox" name="shipAddress" id="shipAddress" />
                                <label htmlFor="shipAddress" className='heading-5'>Ship to a different address?</label>
                            </div>
                        </div>
                        <input type="text" placeholder="Order notes"/>
                    </form>
                </div>
                <div className="checkout-yourOrder flex-column">
                    <p className='heading-2' style={{lineHeight: "25px"}}>Your Order</p>
                    <div className="checkout-yourOrder-container flex-column">
                        <div className="checkout-yourOrder-input flex-column">
                            <BillList></BillList>
                            <div className="checkout-yourOrder-inputRadio-container flex-column">
                                <div className="yourOrder-inputRadio-directBank flex-column" style={{alignItems: "flex-start"}}>
                                    <div>
                                        <input type="radio" name="yourOrderInputRadio" id="directBank" />
                                        <label htmlFor="directBank" className='heading-5'>Direct bank transfer</label>
                                    </div>
                                    <p className='body-small' style={{color: "#707070"}}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</p>
                                </div>
                                <div>
                                    <input type="radio" name="yourOrderInputRadio" id="checkPayments" />
                                    <label htmlFor="checkPayments" className='heading-5'>Check payments</label>
                                </div>
                                <div>
                                    <input type="radio" name="yourOrderInputRadio" id="cashDelivery" />
                                    <label htmlFor="cashDelivery"  vclassName='heading-5'>Cash on delivery</label>
                                </div>
                                <div>
                                    <input type="radio" name="yourOrderInputRadio" id="paypal" />
                                    <label htmlFor="paypal" className='heading-5'>PayPal</label>
                                </div>
                            </div>
                        </div>
                        <button className='checkoutYourOrderButton body-large'>PLACE ORDER</button>
                    </div>
                </div>

            </div>
        </div>
    )
}