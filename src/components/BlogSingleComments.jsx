import './BlogSingleComments.css'

import BlogSingleComment from "./BlogSingleComment";

import user from '../assets/blogSingleComment01.svg'
import user1 from '../assets/blogSingleComment02.svg'

let number = 3;

export default function BlogSingleComments() {
    return (
        <div className="blogSingleComments">
            <p className='heading-2'>Comments({number})</p>
            <div className="blogSingleComments-body">
                <div className="blogSingleComments-nestedComments-container">
                    <div className='blogSingleComments-nestedComments'>
                        <BlogSingleComment image={user} name="Scarlet withch"/>
                        <BlogSingleComment image={user1} name="Kate moss" width="482px"/>
                    </div>
                </div>
                <BlogSingleComment image={user} name="Scarlet withch"></BlogSingleComment>
                {/* <BlogSingleComment image={user1} /> */}
            </div>
        </div>
    )
}