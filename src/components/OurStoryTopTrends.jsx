import './OurStoryTopTrends.css'

import fasterFashion from '../assets/blogSingle02.svg'

export default function OurStoryTopTrends() {
    return (
        <div className="ourStoryTopTrends">
            <div className="ourStoryTopTrends-top">
                <p className='heading-2'>Top trends</p>
                <img className='ourStoryTopTrendsImage' src={fasterFashion} alt="Top trends" />
            </div>
            <div className="ourStoryTopTrends-bottom">
                <p className='heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                <ul className='heading-5'>
                    <li>consectetur adipiscing elit. Aliquam placerat</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </div>
        </div>
    )
}