import { useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import './ProductSimilarItems.css'

import ProductCard from '../components/ProductCard'

export default function ProductSimilarItems() {

    let {productId} = useParams();
    
    const [ProductId, setProductId] = useState()

    useEffect(() => {
        async function getProduct() {
            const request = await axios.get(`http://localhost:3000/product/${productId}`)
            setProductId(request.data)
        }

        getProduct()
    }, [])
    
    if(ProductId){
        console.log(ProductId[0].Categories)
    }

    const [Product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('http://localhost:3000/product')
            setProduct(request.data)
        }

        fetchData()
    }, [])

    console.log(Product)

    if(Product){
        console.log(Product)
        return (
            <div className="productSimilarItems">
                <p className="heading-2" style={{marginBottom: '47px'}}>Similar Items</p>
                <div className="similarItems-container">
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
    }

}