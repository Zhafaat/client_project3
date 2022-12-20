import './BlogCard.css'
import { Link } from 'react-router-dom'

export default function BlogCard(props) {
    return (
        <div className="blogCard">
            <div className="blogCard-image-container">
                <img className='blogCardImage' src={props.image} alt="Fashion" />
                <p className='body-medium' style={{color: "#707070"}}>Fashion - October 8, 2020</p>
            </div>
            <div className="blogCard-content-container">
                <div className="blogCard-content">
                    <p className='heading-3'>Top Trends From Spring</p>
                    <p className='blogCardText heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </p>
                </div>
                <Link className='link body-large' style={{color: "#A18A68", width: "83px"}} to={"/blogSingle"}>Read More</Link>
            </div>
        </div>
    )
}