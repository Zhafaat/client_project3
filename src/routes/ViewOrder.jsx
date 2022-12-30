import BillList from '../components/BillList'
import OrderConfirmation from '../components/OrderConfirmation'
import './ViewOrder.css'

export default function ViewOrder(){
    return(
        <div className="viewOrder">
            <OrderConfirmation></OrderConfirmation>
            <div className="viewOrder-container">
                <div className="viewOrder-orderDetails">
                    <p className='heading-2'>Order Details</p>
                    <div className="viewOrder-orderDetails-container">
                        <div className="viewOrder-orderDetails-left">
                            <div className="orderDetails-left-container">
                                <p className='heading-5'>ORDER NUMBER</p>
                                <p className='heading-5' style={{color: "#707070"}}>1879605573994</p>
                            </div>
                            <div className="orderDetails-left-container">
                                <p className='heading-5'>EMAIL</p>
                                <p className='heading-5' style={{color: "#707070"}}>Vitathemes@gmail.com</p>
                            </div>
                            <div className="orderDetails-left-container">
                                <p className='heading-5'>PAYMENT METHOD</p>
                                <p className='heading-5' style={{color: "#707070"}}>Mastercard*************7865</p>
                            </div>
                            <div className="orderDetails-left-container">
                                <p className='heading-5'>ORDER DATE</p>
                                <p className='heading-5' style={{color: "#707070"}}>October 8,2020</p>
                            </div>
                        </div>
                        <div className="viewOrder-orderDetails-right">
                            <div className="orderDetails-left-container">
                                <p className='heading-5'>DELIVERY OPTIONS</p>
                                <p className='heading-5' style={{color: "#707070"}}>Standard delivery</p>
                            </div>
                            <div className="orderDetails-left-delivery">
                                <p className='heading-5'>DELIVERY ADDRESS</p>
                                <div className="orderDetails-left-delivery-list">
                                    <p className='heading-5' style={{color: "#707070"}}>Kristian holst 34</p>
                                    <p className='heading-5' style={{color: "#707070"}}>old street W1F</p>
                                    <p className='heading-5' style={{color: "#707070"}}>7NU london</p>
                                    <p className='heading-5' style={{color: "#707070"}}>United Kingdom</p>
                                </div>
                            </div>

                            <div className="orderDetails-left-container">
                                <p className='heading-5'>CONTACT NUMBER</p>
                                <p className='heading-5' style={{color: "#707070"}}>+44 8749790988</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="viewOrder-orderSummary">
                    <p className='heading-2' style={{lineHeight: "25px"}}>Order Summary</p>
                    <div className="viewOrder-orderSummary-container">
                        <BillList></BillList>
                    </div>
                </div>

            </div>
        </div>
    )
}