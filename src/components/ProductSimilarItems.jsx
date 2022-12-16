import './ProductSimilarItems.css'

import SimilarItem from "./SimilarItem"

export default function ProductSimilarItems() {
    return (
        <div className="productSimilarItems">
            <p className="heading-2">Similar Items</p>
            <div className="similarItems-container">
                <SimilarItem />
                <SimilarItem />
                <SimilarItem />
            </div>
        </div>
    )
}