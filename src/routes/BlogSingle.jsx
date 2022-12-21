import './BlogSingle.css'

import BlogSingleNews from "../components/BlogSingleNews";
import BlogSingleTopTrends from '../components/BlogSingleTopTrends';


export default function BlogSingle() {
    return (
        <div className="blogSingle">
            <BlogSingleNews></BlogSingleNews>
            <BlogSingleTopTrends></BlogSingleTopTrends>
        </div>
    )
}