import './BlogSingle.css'

import BlogSingleNews from "../components/BlogSingleNews";
import BlogSingleTopTrends from '../components/BlogSingleTopTrends';
import BlogSingleReply from '../components/BlogSingleReply';
import BlogSingleComments from '../components/BlogSingleComments';


export default function BlogSingle() {
    return (
        <div className="blogSingle">
            <BlogSingleNews></BlogSingleNews>
            <BlogSingleTopTrends></BlogSingleTopTrends>
            <BlogSingleReply></BlogSingleReply>
            <BlogSingleComments></BlogSingleComments>
        </div>
    )
}