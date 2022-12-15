import './Productreview.css'

import ReviewStars from "./ReviewStars"

export default function ProductReview() {
    return (
        <div className="productReview">
            <div className="productReview-productStars">
                <div className="productReview-product">
                    <p className="heading-3">Scarlet withch</p>
                    <p className="body-medium" style={{color: "#707070"}}>6 May, 2020</p>
                </div>
                <ReviewStars />
            </div>
            <p className="productReviewText heading-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
        </div>
    )
}