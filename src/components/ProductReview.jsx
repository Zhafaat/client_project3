import './Productreview.css'

import ReviewStars from "./ReviewStars"

export default function ProductReview(props) {
    return (
        <div className="productReview">
            <div className="productReview-productStars">
                <div className="productReview-product">
                    <p className="heading-3">{props.name}</p>
                    <p className="body-medium" style={{color: "#707070"}}>{props.date}</p>
                </div>
                <ReviewStars />
            </div>
            <p className="productReviewText heading-5">{props.review}</p>
        </div>
    )
}