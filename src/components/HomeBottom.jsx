import { Link } from "react-router-dom"
import './HomeBottom.css'
import ProductCard from "./ProductCard"
import product2 from '../assets/product2.svg'
import product from '../assets/product.svg'

export default function HomeBottom() {
    return (
        <div className="homeBottom">
            <div className="homeBottom-title">
                <p className="heading-1">Shop The Latest</p>
                <Link className="homeBottom-link heading-4">View All</Link>
            </div>
            <div className="homeBottom-product">
                <div className="product-info">
                    <ProductCard image={product2} heightCard="472px" widthImage="380px" heightImage="380px" />
                    <ProductCard image={product} heightCard="472px" widthImage="380px" heightImage="380px" />
                    <ProductCard image={product} heightCard="472px" widthImage="380px" heightImage="380px" />
                </div>
                <div className="product-info">
                    <ProductCard image={product} heightCard="472px" widthImage="380px" heightImage="380px" />
                    <ProductCard image={product} heightCard="472px" widthImage="380px" heightImage="380px" />
                    <ProductCard image={product} heightCard="472px" widthImage="380px" heightImage="380px" />
                </div>
            </div>
        </div>
    )
}