import './Shop.css'

import SearchComponent from '../components/SearchComponent'
import SelectComponent from '../components/SelectComponent'
import {useState} from 'react'
import ProductCard from '../components/ProductCard'
import product from '../assets/product.svg'




function Shop() {
    const [value, setValue] = useState(0)
    function handleSlideChange(e) {
        console.log(e.target.value, '<< e')
        let val = e.target.value
        setValue()
    }
    return (
        <div className="shop">
            <p
            className='shop-h1'
            >Shop The Latest</p>
            <div className="main-contain">
                <div className="search-bar">
                    <div className="search-bar-container">
                        <SearchComponent width='261px' height='36px' />

                        <div className="search-bar-filter">
                        <SelectComponent width="261px" height="53px" />
                        <SelectComponent width="261px" height="53px" />

                        {/* <input type="range" min="20" max="100" value={value} className='slider' onChange={handleSlideChange}  /> */}

                        <div className="price-range">
                            <div className="price-input">
                                <div className="slider">
                                    <div className="progress"></div>
                                </div>
                                <div className="range-input">
                                    <input type="range" className="range-min" min="0" max="10000" value="2500" onChange={handleSlideChange} step="100"/>
                                    <input type="range" className="range-max" min="0" max="10000" value="7500" onChange={handleSlideChange} step="100"/>
                                </div>
                            </div>

                            <p>Price: $40- $180</p>
                        </div>

                        <div className="on-off-container">
                            <div className="label-switch">
                                <p>On sale</p>
                            </div>

                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider-switch round"></span>
                            </label>


                        </div>

                        <div className="on-off-container">
                            <div className="label-switch">
                                <p>In Stock</p>
                            </div>

                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider-switch round"></span>
                            </label>


                        </div>

                        
                      
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <ProductCard heightCard="383px" widthImage="300px" heightImage="300px" image={product} marginBottom="70px"></ProductCard>
                </div>
            </div>
          
        </div>
    )
}

export default Shop