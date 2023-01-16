import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Description() {

    let {productId} = useParams();

    const [Product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`http://localhost:3000/product/${productId}`)
            setProduct(request.data)
        }

        fetchData()
    }, [])

    // console.log(Product)

    if(Product) {
        return (
            <div className="description">
                <p className="heading-5" style={{color: '#707070'}}>{Product[0].description}</p>
            </div>
        )

    } else {
        return(
            <h1>Loading</h1>
        )
    }
}