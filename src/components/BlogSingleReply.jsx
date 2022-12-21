import './BlogSingleReply.css'

export default function BlogSingleReply() {
    return (
        <div className="blogSingleReply">
            <div className="blogSingleReply-head">
                <p className='heading-2' style={{lineHeight: "34px"}}>Leave a reply</p>
                <p className='body-medium' style={{color: "#707070"}}>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form action="#" className="blogSingleReply-form">
                <div className="blogSingleReply-form-input">
                    <div className="blogSingleReply-userInformation">
                        <div className="blogSingleReply-userInformation-input">
                            <div className="blogSingleReply-userInformatin-container">
                                <input className='blogSingleReplyInput body-medium' type="text" placeholder="Enter your name*"/>
                            </div>
                            <div className="blogSingleReply-userInformatin-container">
                                <input className='blogSingleReplyInput body-medium' type="text" placeholder="Enter your Email*"/>
                            </div>
                            <div className="blogSingleReply-userInformatin-container">
                                <input className='blogSingleReplyInput body-medium' type="text" placeholder="Enter your Website"/>
                            </div>
                        </div>
                        <div className="blogSingleReply-checkbox-container">
                            <input className='blogSingleReplyCheckbox' type="checkbox" name="saveData" id="saveData" />
                            <label className='body-medium' style={{color: "#707070"}} htmlFor="saveData">Save my name, email, and website in this browser for the next time I comment</label>
                        </div>
                    </div>
                    <div className="blogSingleReply-input-comment">
                        <input className='blogSingleReplyInput body-medium' type="text" placeholder="Your Comment*"/>
                    </div>
                </div>
                <button className='blogSingleReplyButton body-large' type="submit">POST COMMENT</button>
            </form>
        </div>
    )
}