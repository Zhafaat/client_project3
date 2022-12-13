import searchLogo from '../assets/search.svg'
import './SearchComponent.css'
export default function SearchComponent({height, width}) {
    

    return(
        <div className="search-component"
        style={{
            width : width,
            height : height
        }}
        >
        <input type="text" 
        className=''
        placeholder='Search...' 
        />

        <span>
            <img src={searchLogo} alt="" />
        </span>
        </div>
    )
}