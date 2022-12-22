import './BlogSingleNews.css'

import fastFashion from '../assets/blogSingle01.svg'
import fasterFashion from '../assets/blogSingle02.svg'

export default function BlogSingleNews(props) {
    return(
        <div className="blogSingleNews">
            <div className="blogSingleNews-head">
                <p className='heading-1'>Fast Fashion, And Faster Fashion</p>
                <p className='heading-5' style={{color: "#7F7F7F"}}>by <span style={{color: "black"}}>ANNY JOHNSON</span> - October 8,2020</p>
            </div>
            <div className="blogSingleNews-body">
                <img className='blogSingleNewsFastImage' style={{width: props.width}} src={fastFashion} alt="Fast Fashion" />
                <div className="blogSingleNews-text">
                    <p className='blogSingleNewsText heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue.
                    </p>
                    <p className='blogSingleNewsText heading-5' style={{marginTop: "13px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                    </p>

                </div>
                <img className='blogSingleNewsFasterImage' src={fasterFashion} alt="Faster Fashion" />
            </div>
        </div>
    )
}