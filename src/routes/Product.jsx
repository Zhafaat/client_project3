import './Product.css'

import ProductItemAdded from '../components/ProductItemAdded'
import ProductItemInfo from "../components/ProductItemInfo"
import ProductSimilarItems from '../components/ProductSimilarItems'

export default function Product() {
    return (
        <div className="product">
            <ProductItemAdded />
            <ProductItemInfo />
            <ProductSimilarItems />
        </div>
    )
}