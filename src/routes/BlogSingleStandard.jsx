import './BlogSingleStandard.css'

import SearchCategories from '../components/SearchCategories'
import BlogSingle from './BlogSingle'

export default function BlogSingleStandard() {
    return(
        <div className="blogSingleStandard">
            <SearchCategories />
            <BlogSingle width="947px" marginTop="0"></BlogSingle>
        </div>
    )
}