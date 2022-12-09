import { Link } from "react-router-dom"
import './HomeBottom.css'
import ProductCard from "./ProductCard"

export default function HomeBottom() {
    return (
        <div className="homeBottom">
            <div className="homeBottom-title">
                <p>Shop The Latest</p>
                <Link>View All</Link>
            </div>
            <div className="homeBottom-product">
                <div className="product-info">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="product-info">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}