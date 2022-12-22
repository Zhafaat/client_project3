import './SearchCategories.css'

import SearchComponent from "../components/SearchComponent"

export default function SearchCategories() {
    return (
        <div className="searchCategories">
            <SearchComponent width='261px' height='36px' />

            <div className="searchCategories-categories">
                <p className='heading-4'>Categories</p>
                <div className="searchCategories-categories-container">
                    <p className='heading-5' style={{color: "#707070"}}>Fashion</p>
                    <p className='heading-5' style={{color: "#707070"}}>Style</p>
                    <p className='heading-5' style={{color: "#707070"}}>Accessories</p>
                    <p className='heading-5' style={{color: "#707070"}}>Season</p>
                </div>
            </div>
        </div>
    )
}