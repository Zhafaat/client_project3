import './ProductItemAdded.css'

import { Link } from "react-router-dom"
import added from '../assets/added.svg'

export default function ProductItemAdded() {
    return (
        <div className="productItemAdded">
            <div className="productItemAdded-content">
                <img className="productItemAddedIcon" src={added} alt="Added" />
                <p className="heading-5">The item added to your Shopping bag.</p>
            </div>
            <Link className="link body-large" style={{color: "#A18A68"}}>VIEW CART</Link>
        </div>
    )
}