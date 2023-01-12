import HomeTop from "../components/HomeTop"
import HomeBottom from "../components/HomeBottom"
import './Home.css'

import axios from 'axios'
import React, {useState, useEffect} from "react"

function Home() {

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
            <div className="home">
                <HomeTop image={Product[2].imageURL} name={Product[2].name} price={Product[2].price} />
                <HomeBottom />
            </div>
        )

    } else {
        return(
            <h1>Loading</h1>
        )
    }

}

export default Home