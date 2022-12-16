import './ReviewStars.css'
import star from '../assets/star.svg'


export default function ReviewStars() {
    return (
        <div className="ReviewStars">
            <img className='review-star' src={star} alt="star" />
            <img className='review-star' src={star} alt="star" />
            <img className='review-star' src={star} alt="star" />
            <img className='review-star' src={star} alt="star" />
            <img className='review-star' src={star} alt="star" />
        </div>
    )
}