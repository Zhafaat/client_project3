import './Error.css'

import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            <div className="error-content">
                <p className="heading-1">404 ERROR</p>
                <div className="error-text">
                    <p className="heading-3">This page not found;</p>
                    <p className="heading-3">back to home and start again</p>
                </div>
            </div>
            <Link to={"/"}><button className="errorButton body-large">HOMEPAGE</button></Link>
        </div>
    )
}