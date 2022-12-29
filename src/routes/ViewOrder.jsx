import './ViewOrder.css'

export default function ViewOrder(){
    return(
        <div className="viewOrder">
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
                    <div className="viewOrder-orderSummary-list">
                        <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "18px"}}>
                            <p className='heading-5'>PRODUCT</p>
                            <p className='heading-5'>TOTAL</p>
                        </div>
                        <div className="viewOrder-orderSummary-item">
                            <p className='heading-5' style={{color: "#707070"}}>Lira Earrings</p>
                            <p className='heading-5' style={{color: "#707070"}}>$64</p>
                        </div>
                        <div className="viewOrder-orderSummary-item">
                            <p className='heading-5' style={{color: "#707070"}}>Ollie Earrings</p>
                            <p className='heading-5' style={{color: "#707070"}}>$10</p>
                        </div>
                        <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "12px"}}>
                            <p className='heading-5' style={{color: "#707070"}}>Kaede Hair Pin</p>
                            <p className='heading-5' style={{color: "#707070"}}>$10</p>
                        </div>
                        <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "10px"}}>
                            <p className='heading-5'>SUBTOTAL</p>
                            <p className='heading-5' style={{color: "#707070"}}>$85</p>
                        </div>
                        <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "10px"}}>
                            <p className='heading-5'>SHIPPING</p>
                            <p className='heading-5' style={{color: "#707070"}}>Free shipping</p>
                        </div>
                        <div className="viewOrder-orderSummary-item">
                            <p className='body-large'>TOTAL</p>
                            <p className='body-large'>$85</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}