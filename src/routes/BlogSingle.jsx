import './BlogSingle.css'

import BlogSingleNews from "../components/BlogSingleNews";
import BlogSingleTopTrends from '../components/BlogSingleTopTrends';
import BlogSingleReply from '../components/BlogSingleReply';


export default function BlogSingle() {
    return (
        <div className="blogSingle">
            <BlogSingleNews></BlogSingleNews>
            <BlogSingleTopTrends></BlogSingleTopTrends>
            <BlogSingleReply></BlogSingleReply>
        </div>
    )
}