import { Link } from "react-router-dom"
import './HomeBottom.css'
import ProductCard from "./ProductCard"
import product2 from '../assets/product2.svg'
import product from '../assets/product.svg'

import axios from 'axios'
import React, {useState, useEffect} from "react"

export default function HomeBottom() {

    const [Product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('http://localhost:3000/product')
            setProduct(request.data)
        }

        fetchData()
    }, [])

    // console.log(Product)

    if(Product){
        return (
            <div className="homeBottom">
                <div className="homeBottom-title">
                    <p className="heading-1">Shop The Latest</p>
                    <Link className="homeBottom-link heading-4">View All</Link>
                </div>
                <div className="homeBottom-product">
                    {
                        Product.map(product => {
                            return(
                                <ProductCard image={product.imageURL} name={product.name} price={product.price} heightCard="472px" widthImage="380px" heightImage="380px" marginBottom="70px"
                                id={product.id} key={product.id}/>
                            )
                        })
                    }
                </div>
            </div>
        )

    } else {
        return (
            <h1>Loading</h1>
        )
    }

}