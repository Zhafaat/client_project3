import './Reviews.css'

import ProductReview from "../components/ProductReview"
import ReviewStars from '../components/ReviewStars'

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews-list">
                <p className="heading-3">2 Reviews for lira earings</p>
                <div className="reviews-list-container">
                    <ProductReview />
                    <ProductReview />

                </div>
            </div>
            <div className="reviews-addReview">
                <div className="addReview-content">
                    <p className='heading-3'>Add a Review</p>
                    <p className='addReviewNotice'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <form action="#" className='addReview-form'>
                    <div className="addReview-formInput">
                        <div className="addReview-inputText">
                            <div className="inputText-container">
                                <input className='inputtextStyle body-medium' type="text" name="review" id="review" placeholder='Your Review*' />
                                <hr />
                            </div>
                            <div className="inputText-container">
                                <input className='inputtextStyle body-medium' type="text" name="name" id="name" placeholder='Enter your name*' />
                                <hr />
                            </div>
                            <div className="inputText-container">
                                <input className='inputtextStyle body-medium' type="text" name="email" id="email" placeholder='Enter your Email*' />
                                <hr />
                            </div>
                            <div className="inputCheckbox-container" style={{display: "flex"}}>
                                <input type="checkbox" name="saveDate" id="saveData" />
                                <label className='inputCheckboxLabel' htmlFor="saveData">Save my name, email, and website in this browser for the next time I comment</label>
                            </div>

                        </div>
                        <div className="addReview-inputRating">
                            <p className='body-medium' style={{color: "#707070"}}>Your Rating*</p>
                            <ReviewStars />

                        </div>
                    </div>
                    <button type="submit" className='addReviewButton body-large'>Submit</button>
                </form>
            </div>
        </div>
    )
}