import SearchComponent from "../components/SearchComponent"

export default function Blog() {
    return (
        <div className="blog">
            <p>Blog</p>
            <div className="blog-body">
                <div className="blog-body-left">
                    <SearchComponent width='261px' height='36px' />

                    <div className="blog-body-categories">
                        <p>Categories</p>
                        <div className="blog-body-categories-container">

                        </div>
                    </div>
                </div>
                <div className="blog-body-right">
                    <div className="blog-body-right-container">
                        <div className="blog-body-right-row"></div>
                        <div className="blog-body-right-row"></div>

                    </div>
                    <div className="blog-body-right-pagesBar">

                    </div>

                </div>
            </div>
        </div>
    )
}