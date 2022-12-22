import './BlogSingle.css'

import BlogSingleNews from "../components/BlogSingleNews";
import BlogSingleTopTrends from '../components/BlogSingleTopTrends';
import BlogSingleReply from '../components/BlogSingleReply';
import BlogSingleComments from '../components/BlogSingleComments';


export default function BlogSingle(props) {
    return (
        <div className="blogSingle" style={{marginTop: props.marginTop}}>
            <BlogSingleNews width={props.width}></BlogSingleNews>
            <BlogSingleTopTrends></BlogSingleTopTrends>
            <BlogSingleReply></BlogSingleReply>
            <BlogSingleComments></BlogSingleComments>
        </div>
    )
}