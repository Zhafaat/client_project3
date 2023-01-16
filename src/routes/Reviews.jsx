import './Reviews.css'

import ProductReview from "../components/ProductReview"
import ReviewStars from '../components/ReviewStars'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Reviews() {

    let {productId} = useParams();

    const [Product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`http://localhost:3000/product/${productId}`)
            setProduct(request.data)
        }

        fetchData()
    }, [])

    if(Product){
        console.log(Product[0])
        return (
            <div className="reviews">
                <div className="reviews-list">
                    <p className="heading-3" style={{marginBottom: "76px"}}>{Product[0].reviews.length} Reviews for lira earings</p>
                    <div className="reviews-list-container">
                        {
                            Product[0].reviews.map(review => {
                                return(
                                    <ProductReview name={Product[0].name} date={Product[0].create_at} review={review.review} key={review.id}/>

                                )
                            })
                        }
                        {/* <ProductReview /> */}
    
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
    } else {
        return(
            <h1>Loading</h1>
        )
    }


}