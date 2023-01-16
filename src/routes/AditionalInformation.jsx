import './AditionalInformation.css'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function AditionalInformation() {

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

    if(Product){
        return (
            <div className="aditionalInformation">
                <div className="aditionalInformation-container">
                    <p className="aditionalInformationName heading-5">Weight:</p>
                    <p className="aditionalInformationValue heading-5">{Product[0].weight} g</p>
                </div>
                <div className="aditionalInformation-container">
                    <p className="aditionalInformationName heading-5">Dimentions:</p>
                    <p className="aditionalInformationValue heading-5">{Product[0].dimention}</p>
                </div>
                <div className="aditionalInformation-container">
                    <p className="aditionalInformationName heading-5">Colours:</p>
                    <p className="aditionalInformationValue heading-5">{Product[0].colours}</p>
                </div>
                <div className="aditionalInformation-container">
                    <p className="aditionalInformationName heading-5">Material:</p>
                    <p className="aditionalInformationValue heading-5">{Product[0].material}</p>
                </div>
            </div>
        )

    } else {
        return(
            <h1>Loading</h1>
        )
    }
}