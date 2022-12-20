import './Blog.css'

import BlogCard from "../components/BlogCard"
import BlogPagesbar from "../components/BlogPagesbar"
import SearchComponent from "../components/SearchComponent"
import blogImage1 from '../assets/blog01.svg'
import blogImage2 from '../assets/blog02.svg' 
import blogImage3 from '../assets/blog03.svg' 
import blogImage4 from '../assets/blog04.svg' 
import arrow from '../assets/arrow.svg'


export default function Blog() {
    return (
        <div className="blog">
            <p className='heading-1'>Blog</p>
            <div className="blog-body">
                <div className="blog-body-left">
                    <SearchComponent width='261px' height='36px' />

                    <div className="blog-body-categories">
                        <p className='heading-4'>Categories</p>
                        <div className="blog-body-categories-container">
                            <p className='heading-5' style={{color: "#707070"}}>Fashion</p>
                            <p className='heading-5' style={{color: "#707070"}}>Style</p>
                            <p className='heading-5' style={{color: "#707070"}}>Accessories</p>
                            <p className='heading-5' style={{color: "#707070"}}>Season</p>
                        </div>
                    </div>
                </div>
                <div className="blog-body-right">
                    <div className="blog-body-right-container">
                        <div className="blog-body-right-row">
                            <BlogCard image={blogImage1}></BlogCard>
                            <BlogCard image={blogImage2}></BlogCard>
                        </div>
                        <div className="blog-body-right-row">
                            <BlogCard image={blogImage3}></BlogCard>
                            <BlogCard image={blogImage4}></BlogCard>
                        </div>

                    </div>
                    <div className="blog-body-right-pagesBar">
                        <BlogPagesbar background="black" border="white" color="white" inner="1"></BlogPagesbar>
                        <BlogPagesbar background="white" border="black" color="black" inner="2"></BlogPagesbar>
                        <BlogPagesbar background="white" border="black" color="black" inner={<img src={arrow} alt="arrow" />}></BlogPagesbar>

                        
                    </div>

                </div>
            </div>
        </div>
    )
}