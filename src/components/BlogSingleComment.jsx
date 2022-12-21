import './BlogSingle-Comment.css'

import arrow from '../assets/blogSingleCommentArrow.svg'

export default function BlogSingleComment({image, width, name}) {
    return (
        <div className="blogSingleComment">
            <img className="blogSingleCommentImage" src={image} alt="User" />
            <div className="blogSingleComment-container" style={{width: width}}>
                <div className="blogSingleComment-user-container">
                    <div className="blogSingleComment-nameDate">
                        <p className='heading-3'>{name}</p>
                        <p className='body-medium' style={{color: "#707070"}}>6 May, 2020</p>
                    </div>
                    <div className="blogSingleComment-reply">
                        <img className='blogSingleCommentArrow' src={arrow} alt="Reply" />
                        <p>Reply</p>
                    </div>
                </div>
                <p className='heading-5' style={{color: "#707070"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
            </div>
        </div>
    )
}