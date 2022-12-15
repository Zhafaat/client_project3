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
                    <p>Add a Review</p>
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div>
                <form action="#">
                    <div className="addReview-formInput">
                        <div className="addReview-inputText">
                            <div className="inputReview-container">
                                <input type="text" name="review" id="review" placeholder='Your Review*' />
                                <hr />
                            </div>
                            <div className="inputName-container">
                                <input type="text" name="name" id="name" placeholder='Enter your name*' />
                                <hr />
                            </div>
                            <div className="inputEmail-container">
                                <input type="text" name="email" id="email" placeholder='Enter your Email*' />
                                <hr />
                            </div>
                            <input type="checkbox" name="saveDate" id="saveData" />
                            <label htmlFor="saveData">Save my name, email, and website in this browser for the next time I comment</label>

                        </div>
                        <div className="addReview-inputRating">
                            <p>Your Rating*</p>
                            <ReviewStars />

                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}