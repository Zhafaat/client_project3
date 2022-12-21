import './BlogSingleTopTrends.css'

import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import twitter from '../assets/tw.svg'

export default function BlogSingleTopTrends() {
    return (
        <div className="blogSingleTopTrends">
            <div className="blogSingleTopTrends-top">
                <p className='heading-2'>Top trends</p>
                <div className="blogSingleTopTrends-content">
                    <p className='heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.</p>
                    <ul className='heading-5'>
                        <li>consectetur adipiscing elit. Aliquam placerat</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>sapien tortor faucibus augue</li>
                        <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
                    </ul>
                </div>
            </div>
            <div className="blogSingleTopTrends-bottom">
                <div className="blogSingleTopTrends-tagsShare">
                    <div className="blogSingleTopTrends-tags-container">
                        <p className='heading-5'>Tags</p>
                        <hr className='blogSingleTopTrendsTagsLine' />
                        <p className='heading-5' style={{color: "#707070"}}>Fashion, Style, Season</p>
                    </div>
                    <div className="blogSingleTopTrends-share-container">
                        <p className='heading-5'>Share</p>
                        <hr className='blogSingleTopTrendsShareLine'/>
                        <div className="blogSingleTopTrends-share-sosmed">
                            <img className='blogSingleTopTrendsFb' src={fb} alt="Fb" />
                            <img className='blogSingleTopTrendsIg' src={ig} alt="Ig" />
                            <img className='blogSingleTopTrendsTwitter' src={twitter} alt="Twitter" />
                        </div>
                    </div>
                </div>
                <hr style={{color: "#D8D8D8", margin: "0"}}/>
            </div>
        </div>
    )
}