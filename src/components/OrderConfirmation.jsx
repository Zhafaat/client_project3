import './OrderConfirmation.css'

import added from '../assets/added.svg'

export default function OrderConfirmation() {
    return (
        <div className="orderConfirmation">
            <div className="orderConfirmation-content">
                <img className="orderConfirmationIcon" src={added} alt="Added" />
                <p className="heading-5">We’ve received your order</p>
            </div>
        </div>
    )
}